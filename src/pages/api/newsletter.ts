import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_API_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_API_ANON;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get('email')?.toString();
    const description = formData.get('description')?.toString() || '';
    const fileDownload = formData.get('fileDownload')?.toString() || '';
    const date = new Date().toISOString();
    const type = fileDownload ? 'archivo' : 'newsletter';

    if (!email) {
      return new Response(JSON.stringify({ error: 'Faltan campos obligatorios.' }), { status: 400 });
    }

    // Guardar en Supabase
    const { error: insertError } = await supabase.from('subscription').insert([
      { email, date, type, description }
    ]);
    if (insertError) {
      return new Response(JSON.stringify({ error: 'Error al guardar en la base de datos.' }), { status: 500 });
    }

    // Si hay fileDownload, generar signed URL
    let downloadUrl = '';
    
    if (fileDownload) {
      // Lista los archivos del bucket antes de intentar generar el signed URL
      const { data: list, error: listError } = await supabase.storage.from('codevsys-web').list('');
      
      if (listError) {
        
      }
      // Asume que fileDownload es la ruta relativa en el bucket 'codevsys-web'
      const { data, error: urlError } = await supabase.storage.from('codevsys-web').createSignedUrl(fileDownload, 60 * 10); // 10 minutos
      
      
      if (urlError || !data?.signedUrl) {
        return new Response(JSON.stringify({ error: 'No se pudo generar el enlace de descarga.' }), { status: 500 });
      }
      downloadUrl = data.signedUrl;
    }

    return new Response(JSON.stringify({ success: true, downloadUrl }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al procesar el formulario.' }), { status: 500 });
  }
};
