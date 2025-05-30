import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../lib/firebase'
import { useRouter } from 'next/router'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: any) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/admin')
    } catch (err) {
      setError('Invalid credentials')
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"
          className="w-full p-2 mb-3 border rounded" required />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"
          className="w-full p-2 mb-3 border rounded" required />
        <button type="submit" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">Login</button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </main>
  )
}
