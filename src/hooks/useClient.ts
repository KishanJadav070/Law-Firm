// hooks/useClients.ts
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export const useClients = () => {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchClients = async () => {
    setLoading(true);
    const { data, error } = await supabase!.from('contact_submissions').select('*');
    if (error) console.error(error);
    else setClients(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return { clients, fetchClients, loading };
};