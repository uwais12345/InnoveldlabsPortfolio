import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type FC,
} from 'react';
import type { CaseStudy, ClientExperience } from '../types';
import { caseStudies, clientExperiences } from '../data/portfolio';

interface PortfolioState {
  selectedCaseStudy: CaseStudy | null;
  setSelectedCaseStudy: (cs: CaseStudy | null) => void;
  allCaseStudies: CaseStudy[];
  allExperiences: ClientExperience[];
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
  contactFormSubmitted: boolean;
  setContactFormSubmitted: (v: boolean) => void;
}

const PortfolioContext = createContext<PortfolioState | undefined>(undefined);

export const PortfolioProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);

  return (
    <PortfolioContext.Provider
      value={{
        selectedCaseStudy,
        setSelectedCaseStudy,
        allCaseStudies: caseStudies,
        allExperiences: clientExperiences,
        mobileMenuOpen,
        setMobileMenuOpen,
        contactFormSubmitted,
        setContactFormSubmitted,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export function usePortfolio(): PortfolioState {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error('usePortfolio must be used inside PortfolioProvider');
  return ctx;
}
