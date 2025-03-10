import React from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  const data = [
    {
      category: 'Head of The Department',
      subCategory: [{ name: 'Prof.Bindhu J S', number: '+91 9446916880' }],
    },
    {
      category: 'Faculty Coordinator',
      subCategory: [{ name: 'Prof.Shamna A L', number: '+91 9895480733' }],
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
        { name: 'Sandeep Kumar', number: '+91 7593096592' },
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
                          <a href={`tel:${value.number}`}>{value.number}</a>
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
              <FaInstagram size={40} color="#ff3090" />
            </a>
            <a href="mailto:innerve.official2025@gmail.com">
              <BiLogoGmail size={40} color="#ff2727" />
            </a>
            <a
              href="https://wa.me/+917034371668"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={40} color="#3cff3c" />
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
