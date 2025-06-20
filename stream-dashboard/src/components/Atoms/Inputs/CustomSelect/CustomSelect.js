import Select from 'react-select';
import * as styles from './style.css';
import { ChevronDown, Eye } from 'lucide-react';

const CustomSelect = ({ label, required, wrapper = true, placeholder, icon, backgroundColor }) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      backgroundColor: backgroundColor ? backgroundColor : 'rgba(43, 43, 43, 1)',
      '&:hover': {
        borderColor: '#5C5C5C',
      },
      padding: '2px',
      borderRadius: '8px',
      outline: 'none',
      width: '100%',
      minHeight: '100%',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'rgba(255, 255, 255, 1)',
      fontSize: '16px',
      fontWeight: '400',
      marginLeft: icon ? '40px' : 0,
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: '#F472B6',
      transform: state?.selectProps?.menuIsOpen ? 'rotate(180deg)' : 'rotate(0)',
      transition: 'transform 200ms ease',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#EFF6FF' : state.isFocused ? '#EFF6FF' : 'transparent',
      color: state.isSelected ? 'black' : '#5C5C5C',
      '&:hover': {
        backgroundColor: '#EFF6FF',
        color: 'black',
      },
      cursor: 'pointer',
      padding: '8px 16px',
    }),
    menu: (provided) => ({
      ...provided,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      borderRadius: '6px',
      marginTop: '4px',
      backgroundColor: 'rgba(43, 43, 43, 1)',
    }),
  };

  return (
    <>
      {wrapper ? (
        <div className={styles.container}>
          <label className={styles.labelStyle}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
          <div className={styles.inputContainer}>
            {icon ? (
              <Eye
                style={{ position: 'absolute', left: 20, zIndex: 10000 }}
                color='white'
                size={20}
              />
            ) : null}
            <Select
              options={[]}
              placeholder={placeholder && placeholder}
              components={{
                DropdownIndicator: () => <ChevronDown size={20} />,
                IndicatorSeparator: () => null,
              }}
              styles={customStyles}
              // isSearchable={false}
              // value={options?.find((option) => option?.value === field?.value)}
              // onChange={(option) => field?.onChange(option?.value)}
            />
          </div>
        </div>
      ) : (
        <div className={styles.inputContainerwithoutWrapper}>
          <Select
            options={[]}
            placeholder={placeholder}
            components={{
              DropdownIndicator: () => <ChevronDown size={20} />,
              IndicatorSeparator: () => null,
            }}
            styles={customStyles}
            // isSearchable={false}
            // value={options?.find((option) => option?.value === field?.value)}
            // onChange={(option) => field?.onChange(option?.value)}
          />
        </div>
      )}
    </>
  );
};
export default CustomSelect;
