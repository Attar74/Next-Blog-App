import { auth } from '../../../../auth-config';
import NavLinks from './nav-links';

export default async function NavLinksWrapper() {
  const session = await auth();
  return <NavLinks session={session} />;
}
