import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout/Layout';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <Layout>
      <ContactForm />
      <Filter />
      <ContactsList />
      <GlobalStyle />
      <Toaster />
    </Layout>
  );
};
