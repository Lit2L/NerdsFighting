import { authOptions } from '@/server/auth'
import { getServerSession } from 'next-auth/next'

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)

  return session?.user
}
