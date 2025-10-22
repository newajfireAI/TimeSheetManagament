import { redirect } from 'next/navigation'
import SettingsLayout from './SettingsLayout'

export default function settings({children}) {

 
  return (
    <>
    {redirect("/settings/profile")}
    <SettingsLayout>{children}</SettingsLayout>
    </>
  )
}
