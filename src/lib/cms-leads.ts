import { createServerSupabase } from './supabase-server';

export interface CMSLead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  hospital?: string;
  product?: string;
  message?: string;
  type: 'contact' | 'quote' | 'newsletter';
  status: 'new' | 'processing' | 'completed' | 'cancelled';
  source_url?: string;
  metadata?: any;
  created_at?: string;
  updated_at?: string;
}

function getSupabaseAdmin() {
  return createServerSupabase();
}

export async function getAllLeads() {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from('cms_leads')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('SERVER: Error fetching leads from cms_leads table:', error);
    // Trả về [] để UI không bị crash, nhưng log đã được ghi lại ở phía server
    return [];
  }

  return data as CMSLead[];
}

export async function createLead(lead: Partial<CMSLead>) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from('cms_leads')
    .insert([lead])
    .select()
    .single();

  if (error) {
    console.error('Error creating lead:', error);
    throw error;
  }

  return data as CMSLead;
}

export async function updateLeadStatus(id: string, status: CMSLead['status']) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from('cms_leads')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('SERVER: Error updating lead status:', error);
    throw error;
  }

  return data as CMSLead;
}

export async function deleteLead(id: string) {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from('cms_leads')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('SERVER: Error deleting lead:', error);
    throw error;
  }

  return true;
}
