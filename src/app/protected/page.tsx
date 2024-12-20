// app/protected/page.tsx

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    // No session: User is not signed in
    return <p>Access Denied. Please sign in first.</p>
  }

  return <p>Welcome to the protected page, {session.user?.name || session.user?.email}</p>
}
