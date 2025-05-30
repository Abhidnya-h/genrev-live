import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end() // Method Not Allowed
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    await addDoc(collection(db, 'leads'), {
      name,
      email,
      message,
      createdAt: serverTimestamp()
    })

    res.status(200).json({ success: true })
  } catch (error) {
    console.error('Error saving lead:', error)
    res.status(500).json({ error: 'Something went wrong' })
  }
}
