import { useEffect, useState } from 'react';

// Define the shape of a lead object
type Lead = {
  id: number;
  name: string;
  // Add other fields if needed, like email, status, etc.
};

export default function CRMLeads() {
  const [leads, setLeads] = useState<Lead[]>([]); // Type the state properly

  useEffect(() => {
    fetch('/crm/leads')
      .then(res => res.json())
      .then((data: Lead[]) => setLeads(data)); // Optional: type the response
  }, []);

  return (
    <div>
      <h2>CRM Leads</h2>
      <ul>
        {leads.map((lead) => (
          <li key={lead.id}>{lead.name}</li>
        ))}
      </ul>
    </div>
  );
}
