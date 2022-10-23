import { createContext, useState } from 'react';
import Page from './components/Page';
import { Option, Patient, ScanType } from './types';

export interface GlobalContext {
  patient: Patient | null;
  updatePatient: (patientOpt: Option<Patient>) => void;
  scanType: ScanType | null;
  updateScanType: (scanTypeOpt: Option<ScanType>) => void;
  currentImg: string | null;
  updateCurrentImg: (img: string) => void;
  isModalOpen: boolean;
  updateIsModalOpen: (isOpen: boolean) => void;
}

export const Context = createContext<GlobalContext | null>(null);

function App() {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [scanType, setScanType] = useState<ScanType | null>(null);
  const [currentImg, setCurrentImg] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const updatePatient = (patientOpt: Option<Patient>) =>
    setPatient(patientOpt.origin);
  const updateScanType = (scanTypeOpt: Option<ScanType>) =>
    setScanType(scanTypeOpt.origin);
  const updateCurrentImg = (img: string) => setCurrentImg(img);
  const updateIsModalOpen = (isOpen: boolean) => setIsModalOpen(isOpen);

  const state = {
    patient,
    scanType,
    updatePatient,
    updateScanType,
    currentImg,
    updateCurrentImg,
    isModalOpen,
    updateIsModalOpen,
  };

  return (
    <Context.Provider value={state}>
      <Page />
    </Context.Provider>
  );
}

export default App;
