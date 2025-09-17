
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

export const metadata = {
  title: 'Contact Storm Code',
  description: 'Get yourself up to the Storm Code! Custom Websites, Web Services and Gaming PCs!',
};

export default function RootLayout({ children }) {
  return (
    <>
     {children}
    </>
  );
}
