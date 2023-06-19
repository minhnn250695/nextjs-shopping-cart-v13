import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { User } from '@/components/user.component';

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <>
      <div className="home">This is home page content</div>
      <h1>Server Session</h1>
      <pre>{JSON.stringify(session)}</pre>
      <User/>      
    </>
  );
}
