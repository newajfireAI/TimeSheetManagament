import { redirect } from 'next/navigation';
import SettingsLayout from './SettingsLayout';

// Server component for the /settings route. Redirects to the default sub‑page.
export default function SettingsPage({ children }) {
  // Perform a server‑side redirect to the profile settings page.
  redirect('/settings/profile');
  // Render the layout for any nested settings pages (won’t be reached after redirect).
  return <SettingsLayout>{children}</SettingsLayout>;
}
