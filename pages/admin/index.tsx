import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'
import { auth, db } from '@/lib/firebase'
import { useRouter } from 'next/router'

export default function AdminDashboard() {
  const [leads, setLeads] = useState([])
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user || user.email !== 'hidadugikarabhidnya@gmail.com') {
        router.push('/admin/login')
      } else {
        const snap = await getDocs(collection(db, 'leads'))
        setLeads(snap.docs.map(doc => doc.data()))
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">GENREV Leads Dashboard</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Message</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead: any, i) => (
            <tr key={i}>
              <td className="border p-2">{lead.name}</td>
              <td className="border p-2">{lead.email}</td>
              <td className="border p-2">{lead.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
