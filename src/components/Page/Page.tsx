import Container from '../Container';
import Display from '../Display';
import Form from '../Form';
import Header from '../Header';
import Modal from '../Modal';
import styles from './Page.module.scss';

const Page = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Container>
        <div className={styles.page__content}>
          <Form />
          <Display />
        </div>
      </Container>
      <Modal />
    </div>
  );
};

export default Page;
