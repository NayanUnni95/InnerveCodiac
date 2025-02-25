import React from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  const data = [
    {
      category: 'Staff Coordinator',
      subCategory: [{ name: 'Shamna A L', number: '+91 9895480733' }],
    },
    {
      category: 'Student Coordinators',
      subCategory: [
        { name: 'Karthik Suresh', number: '+91 7034371668' },
        { name: 'Nandan R P', number: '+91 8129192643' },
      ],
    },
    {
      category: 'Head of Public relations',
      subCategory: [
        { name: 'Jeswin A J', number: '+91 7012721738' },
        { name: 'Deepak Das K', number: '+91 8139001416' },
      ],
    },
    {
      category: 'Head of sponsorship',
      subCategory: [{ name: 'Akhil Ram', number: '+91 9645780326' }],
    },
    {
      category: 'Head of Tech Events',
      subCategory: [
        { name: 'Sandeep Kumar Santhosh', number: '+91 7593096592' },
        { name: 'Clifin Cletus', number: '+91 9605277429' },
      ],
    },
  ];
  return (
    <div className={styles.footerOuterContainer}>
      <div className={styles.footerOuterContainer}>
        <div className={styles.footerCoordinatorSection}>
          {data.map((value, index) => {
            return (
              <div className={styles.individualContainer} key={index}>
                <h3 className={styles.category}>{value.category}</h3>
                <div className={styles.groupContainer}>
                  {value.subCategory.map((value, index) => {
                    return (
                      <div className={styles.personCellContainer} key={index}>
                        <div>
                          <p>{value.name}</p>
                          <p>{value.number}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.footerContactSection}>
          <div>
            <span>Connect Us</span>
          </div>
          <div className={styles.logos}>
            <a
              href="https://www.instagram.com/innerve_official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} color="#a29797" />
            </a>
            <a href="mailto:innerve.official2025@gmail.com">
              <BiLogoGmail size={30} color="#a29797" />
            </a>
            <a
              href="https://wa.me/+917034371668"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={30} color="#a29797" />
            </a>
          </div>
          <div>
            <span>Innerve'25</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
