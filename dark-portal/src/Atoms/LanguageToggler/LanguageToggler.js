import { useState } from 'react';
import Image from 'next/image';
import { languageSelector, text, dropdown, dropdownItem, toggler } from './style.css';
import { motion, AnimatePresence } from 'framer-motion';

import { images } from '../../config';

const LanguageToggler = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({
    code: 'SV',
    flag: images.sweden_flag,
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (langCode, langFlag) => {
    setSelectedLang({ code: langCode, flag: langFlag });
    setIsOpen(false);
  };

  return (
    <div className={toggler} onClick={toggleDropdown}>
      <div className={languageSelector}>
        <Image src={selectedLang.flag} alt={`${selectedLang.code}-flag`} height={23} width={23} />
        <span className={text}>{selectedLang.code}</span>
        <Image src={images.downArrow} alt='down-arrow' height={10} width={10} />
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className={dropdown}>
            <div
              className={dropdownItem}
              onClick={() => handleLanguageChange('EN', images.american_flag)}
            >
              <Image src={images.american_flag} alt='US flag' height={23} width={23} />
              <span className={text}>EN</span>
            </div>
            <div
              className={dropdownItem}
              onClick={() => handleLanguageChange('SV', images.sweden_flag)}
            >
              <Image src={images.sweden_flag} alt='Sweden flag' height={23} width={23} />
              <span className={text}>SV</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LanguageToggler;
