import { yekan } from '@/utils/fonts';

//Style
import '@/app/globals.scss';
import "animate.css";

//Component
import Layout from '@/layout/Layout';
import ReduxProvider from '@/provider/ReduxProvider';
import NotificationContext from '@/module/notification/Notification';

//Metadata
export const metadata = {
  title: 'ROXSANA store | Radmehr',
  description: 'store for buy what evere you want',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={yekan.className}>
        <ReduxProvider>
          <NotificationContext>
            <Layout> {children} </Layout>
          </NotificationContext>
        </ReduxProvider>
      </body>
    </html>
  )
}
