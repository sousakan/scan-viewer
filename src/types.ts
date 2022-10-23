export type ScanType = 'arm' | 'head' | 'chest';

export const scanTypeText: Record<ScanType, string> = {
  arm: 'рука',
  head: 'голова',
  chest: 'грудь',
};

export interface Scan {
  type: string;
  img: string;
}

export interface Patient {
  id: string;
  name: string;
  scans: Scan[];
}

export interface Option<T> {
  name: string;
  origin: T;
}
