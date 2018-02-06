/**
 *
 * Encyclopedia
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { media } from 'common/theme';

import EncyclopediaAccordion from 'components/EncyclopediaAccordion';

function Encyclopedia(props) { // eslint-disable-line react/prefer-stateless-function
  const procedural = [
    {
      title: 'Prosedur Open Recruitment',
      content:
        'Untuk menjadi anggota Ristek Fasilkom UI 2018, kamu tinggal mendaftar pada form pendaftaran yang ada di web ini. Setelah mengisi formulir pendaftaran dan memilih Divisi yang ingin kamu ikuti, maka tahap selanjutnya adalah mengerjakan tugas atau mempersiapkan diri pada kontes yang akan diadakan.<br />Setelah itu, maka tunggu saja kabar selanjutnya dari kami untuk mengajakmu berbincang bebas pada sebuah interview, setelah tahap interview selesai, maka kami akan melakukan pemilihan anggota dari semua pendaftar. So, tunggu apa lagi, daftar Ristek 2018 sekarang juga!<br />',
    },
    {
      title: 'Persyaratan Anggota Ristek Fasilkom UI 2018',
      content:
        'Merupakan mahasiswa aktif Fakultas Ilmu Komputer Universitas Indonesia serta memiliki niat serta keinginan tinggi untuk mempelajari hal-hal sesuai bidang yang ada di Ristek Fasilkom UI.',
    },
  ];

  const divisions = [
    {
      title: 'Human Resource',
      content:
        'Bidang yang membantu melakukan penyeleksian SDM Ristek 2018, membantu menangani masalah dalam ruang lingkup internal Ristek agar menunjang kinerja dalam proses pembelajaran serta membantu mengontrol proses berjalannya Ristek 2018 sesuai tujuan.',
    },
    {
      title: 'Public Relation',
      content:
        'Divisi Public Relations merupakan divisi yang mewadahi minat mahasiswa Fasilkom UI dalam bidang sponsorship, public speaking dan juga marketing. Pada divisi ini, kalian dapat mengasah skills dan juga menambah pengalaman baru mengenai public relations tentunya!<br />Kalian akan mendapatkan pengalaman dalam approaching sponsor, content writing, social media maintenance, menjadi MC, mengadakan mini seminar yang narasumbernya merupakan expert di bidang teknologi, mengadakan company visit ke perusahaan teknologi, dan masih banyak yang lainnya! Kamu juga dapat berkolaborasi dengan SIG Ristek yang lainnya. Divisi ini menunjang segala bentuk komunikasi Ristek baik di luar dan ke dalam. Tunggu apa lagi? Join Divisi Public Relations sekarang!',
    },
    {
      title: 'Project Management',
      content:
        'Project Management Division adalah divisi yang bertujuan untuk mengelola proyek yang berupa proyek internal Ristek maupun proyek eksternal yang diterima oleh Ristek. Divisi ini akan berfokus dalam memfasilitasi management project yang akan dikerjakan oleh anggota Ristek 2018. Nantinya dalam divisi ini anggota akan berperan dalam menjadi project manager dari tim-tim proyek yang beranggotakan anggota Ristek 2018 dan memastikan proyek dapat mencapai goal sesuai keinginan client.',
    },
    {
      title: 'Digital Product Design SIG',
      content:
        'SIG Digital Product Design merupakan sebuah SIG yang mewadahi potensi dan minat-bakat mahasiswa Fasilkom UI dalam bidang Digital Product Design. Fokus dari SIG ini bukan hanya pada teori pengembangan Digital Product dalam segi desain, namun juga akan menerapkan langsung menerapkan prinsip-prinsip UI/UX yang benar untuk dapat memecahkan permasalahan yang ada di sekitar. Dalam pelaksanaannya, SIG Digital Product Design juga akan berkolaborasi dengan SIG Mobile Application Development, Game Development, dan Web Development agar Ristek dapat menghasilkan produk-produk yang memiliki desain User Interface yang menarik dan User Experience yang baik. SIG ini juga diharapkan dapat menghasilkan individu-individu yang dapat secara mandiri menyelesaikan permasalahan secara umum dengan pendekatan UI/UX Design.',
    },
    {
      title: 'Game Development SIG',
      content:
        'SIG Game Development adalah SIG yang mewadahi minat-bakat mahasiswa Fasilkom UI dalam pengembangan game. SIG ini diharapkan dapat melahirkan game developer yang mahir dan unggul sehingga dapat menciptakan game, khususnya dengan engine Unity3D, yang fun untuk dimainkan. Pengembangan game pada SIG ini bukan hanya membuat sebuah game, namun juga didasari dengan teori-teori yang mendasari dan bimbingan dari para ahli pada bidang ini.',
    },
    {
      title: 'Mobile Development SIG',
      content: `Mobile Application Development Special Interest Group (Mobdev SIG) adalah SIG
        yang berfokus pada pengembangan aplikasi mobile seperti Android, iOS dan Windows.
        Pada SIG akan dipelajari bermacam - macam metode pengembangan aplikasi mobile.
        Tujuan Mobdev SIG adalah untuk menciptakan berbagai macam produk aplikasi mobile
        yang berguna bagi masyarakat. Setiap anggota Mobdev SIG akan bersama - sama
        mempelajari berbagai macam metode pengembangan aplikasi mobile, sehingga diharapkan
        setiap anggota mampu untuk menerapkan ilmu yang diperolehnya untuk kepentingan
        pengembangan aplikasi pada suatu saat nanti. Setiap anggota akan diajarkan dasar -
        dasar hingga best practice pengembangan aplikasi mobile. Setiap anggota juga
        diharapkan dapat berkolaborasi dengan SIG lain untuk keperluan lomba dan juga dalam
        pengembangan produk aplikasi mobile. Beberapa produk dari Mobdev SIG adalah
        Bejometer (pendek.ga/bejometer) dan Yoka (pendek.ga/yoka). Tertarik belajar dan
        membuat produk tersebut? Yok join Mobdev SIG, yang kami butuhkan adalah semangat
        belajarmu. :)`,
    },
    {
      title: 'Web Development SIG',
      content: `<p>Web Development Special Interest Group (Webdev) adalah sebuah wadah talenta potensial yang memiliki ketertarikan dalam pengembangan perangkat lunak berbasis website di Fasilkom UI. Webdev bertujuan untuk mengembangkan kemampuan tiap anggotanya dalam menciptakan aplikasi website yang menggunakan teknologi-teknologi terbaru dengan best practice yang sudah sesuai standar industri.</p>
        <p>Di webdev, setiap anggota akan diajarkan seluk beluk pengembangan website berdasarkan minatnya, baik dalam pengembangan client-side (Front end) maupun pengembangan server-side (Back end). Para anggota juga akan belajar bersama tentang cara penggunaan alat version control (Git) sampai konfigurasi server.</p>
        <p>Setiap anggota webdev tidak hanya akan belajar teori, tetapi juga akan diajarkan untuk mempraktikan teori yang diajarkan dan terjun langsung dalam proyek nyata. Dan pastinya, di webdev setiap anggotanya akan belajar bagaimana bekerja sama dalam tim yang tentunya akan berguna di dunia magang dan kerja nanti.</p>
        <p>So, don’t hesitate to sign yourself up for webdev, and join the endless fun of discovering the world of web technologies!</p>`,
    },
    {
      title: 'Competitive Programming SIG',
      content: `<p style="text-align: justify;"><span style="font-weight: 400;">Competitive Programming (CP) SIG adalah SIG yang memiliki fokus untuk mengembangkan kemampuan analitik dan pemecahan masalah (</span><em><span style="font-weight: 400;">problem solving</span></em><span style="font-weight: 400;">) melalui CP. Di SIG ini kamu juga akan mempelajari berbagai strategi pemecahan masalah, serta algoritma-algoritma keren yang dapat membantumu dalam hal tersebut. Selain itu, melalui SIG ini kamu dapat melatih dirimu guna menjuarai berbagai kompetisi CP tingkat nasional seperti CompFest, Gemastik, INC, maupun tingkat internasional seperti ACM-ICPC Regional ataupun World Finals!</span></p>
      <p style="text-align: justify;"><span style="font-weight: 400;">Jadi, tunggu apa lagi? Bagi kamu yang ingin mengembangkan potensi </span><em><span style="font-weight: 400;">problem solving</span></em><span style="font-weight: 400;">-mu, buruan daftar! :D</span></p>`,
    },
    {
      title: 'Data Science SIG',
      content: `<p style="text-align: justify;"><em><span style="font-weight: 400;">&ldquo;Information is the oil of the 21st century, and analytics is the combustion engine&rdquo;</span></em><span style="font-weight: 400;"> - Peter Sondergaard, SVP, Gartner Research</span></p>
      <p style="text-align: justify;"><span style="font-weight: 400;">Sesuai namanya, Data Science SIG adalah SIG yang mempelajari bidang Data Science! Apa itu Data Science? Menurut wikipedia:</span></p>
      <p style="text-align: justify;"><em><span style="font-weight: 400;">Data science, also known as data-driven science, is an interdisciplinary field of scientific methods, processes, and systems to extract knowledge or insights from data in various forms, either structured or unstructured, similar to data mining.</span></em></p>
      <p style="text-align: justify;"><span style="font-weight: 400;">Pada dasarnya, Data Science merupakan ilmu yang mempelajari proses ekstraksi informasi dari data. Produk yang dihasilkan dengan penerapan Data Science sangat beragam! Beberapa diantaranya berupa:</span></p>
      <ul style="text-align: justify;">
      <li style="font-weight: 400;"><span style="font-weight: 400;">Insight akan suatu permasalahan melalui analisa pola dalam data, misal dalam mengolah data tweet bisa didapatkan pandangan umum netizen terhadap suatu topik (</span><em><span style="font-weight: 400;">sentiment analysis</span></em><span style="font-weight: 400;">)</span></li>
      <li style="font-weight: 400;"><span style="font-weight: 400;">Software (model) yang bisa melakukan prediksi terhadap input data</span></li>
      <li style="font-weight: 400;"><em><span style="font-weight: 400;">Personalized Recommendation System</span></em><span style="font-weight: 400;"> atau sistem rekomender yang biasa digunakan dalam berbagai macam produk digital (misal e-commerce)</span></li>
      <li style="font-weight: 400;"><em><span style="font-weight: 400;">Speech Recognition, Object Detection,</span></em><span style="font-weight: 400;"> dsb. melalui metode Machine Learning</span></li>
      </ul>
      <p style="text-align: justify;"><span style="font-weight: 400;">Dapat dilihat bahwa Data Science memiliki cakupan pembelajaran yang sangat luas (disebabkan kaitannya yang erat dengan beberapa bidang seperti Machine Learning, dsb.)</span></p>
      <p style="text-align: justify;"><span style="font-weight: 400;">Oleh sebab itu, pembelajaran pada SIG ini akan mempelejari secara umum konsep dan metode-metode mulai dari ekstraksi data, pemrosesan data, hingga menjadi suatu produk dengan menitikberatkan pada metode-metode pemelajaran mesin (Machine Learning)</span></p>
      <p style="text-align: justify;"><span style="font-weight: 400;">Dengan memanfaatkan materi yang dipelajari pada SIG ini serta praktek yang akan dilakukan secara rutin (seperti melalui platform Kaggle), kalian akan mendapatkan pengalaman yang berharga dan dapat turut membantu memajukan standar kualitas Data Scientist di Indonesia!</span></p>`,
    },
    {
      title: 'Embedded System SIG',
      content: `<p style="text-align: justify;"><span style="font-weight: 400;">Berjalannya waktu, perkembangan teknologi sudah semakin pesat. Pasti kalian melihat banyak alat-alat "smart" yang kalian lihat, seperti sistem parkir Fasilkom yang menggunakan KTM.</span></p>
      <p style="text-align: justify;"><span style="font-weight: 400;">Embedded System (ES) SIG merupakan SIG yang akan menjadi wadah untuk kalian mengembangkan talenta di bidang Embedded System. Di SIG ini kalian akan belajar pemrograman hardware, seperti Arduino dan Raspberry Pi, komponen-komponennya serta bagaimana cara untuk menyelesaikan sebuah permasalahan sehari-hari dengan Embedded System.</span></p>
      <p style="text-align: justify;"><span style="font-weight: 400;">Dengan ilmu yang akan kalian dapat di Embedded System, kalian dapat membantu menyelesaikan permasalahan dan membantu orang lain loh. Tidak hanya itu, di sini banyak lomba-lomba yang keren juga!!</span></p>
      <p style="text-align: justify;"><span style="font-weight: 400;">Jadi tunggu apa lagi? Daftarkan diri kalian ke dalam SIG Embedded System!! :D</span></p>`,
    },
    {
      title: 'Network Security & Operating Systems SIG',
      content: `<p style="text-align: justify;"><span style="font-weight: 400;">Network Security and Operating System (NetSOS) merupakan Special Interest Group yang mewadahi mahasiswa yang memiliki ketertarikan pada bidang computer security dan system engineering. Member NetSOS mendapatkan pelatihan dan pengalaman dalam vulnerability assessment and exploitation yang ada dalam berbagai platform, mulai dari web &amp; network application hingga executable binary.</span></p>
      <p style="text-align: justify;"><span style="font-weight: 400;">Member NetSOS juga diperkenalkan dengan free and open-source software (FOSS) untuk keperluan sehari-hari maupun sebagai hacking tools. NetSOS membawa nilai out-of-the-box problem solving dengan harapan bahwa seluruh member NetSOS dapat berpartisipasi (dan menjuarai) dalam kompetisi computer security tingkat nasional maupun internasional. In NetSOS, we learn how to pwn seamlessly in the vast, ever-expanding, bug-ridden ocean created by unwary developers.</span></p>`,
    },
  ];

  return (
    <Wrapper>
      <Helmet>
        <title>Encyclopedia</title>
        <meta
          name="description"
          content="Ensiklopedia Open Recruitment Ristek Fasilkom UI 2018, daftar sekarang juga!"
        />
      </Helmet>
      <Heading>
        <img className="mobile" src={props.papa} alt="papa" />
        <h1>
          Ensiklopedia<br />
          <Link to="/oprec/">Kembali</Link>
        </h1>
        <img className="desktop" src={props.papa} alt="papa" />
      </Heading>
      <h3 className="subheading">Prosedur & Persyaratan</h3>
      {procedural.map((procedure) => (
        <EncyclopediaAccordion key={`accord-${procedure.title}`} item={procedure} />
      ))}
      <h3 className="subheading">Divisi</h3>
      {divisions.map((division) => (
        <EncyclopediaAccordion key={`accord-${division.title}`} item={division} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 4rem 2rem 6rem;
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
  align-content: center;

  .subheading {
    width: 100%;
    font-size: 1rem;
    font-weight: 700;
    text-align: left;
    line-height: 1;
    margin: 4rem 0 1.5rem;
    color: ${(props) => props.theme.color.gray};
  }

  ${media('mobile')} {
    padding: 4rem 2rem 6rem;
  }
`;

const Heading = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  h1 {
    flex: 1;
    font-size: 4rem;
    font-weight: 900;
    line-height: 1;
    text-align: left;
    margin: 0 1rem 0 0;
    color: ${(props) => props.theme.color.yellow};

    a {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      margin: 1rem 0 0;
      font-size: 1rem;
      font-weight: 700;
      text-align: center;
      text-decoration: none;
      line-height: 1;
      border: none;
      border-radius: 0.5rem;
      box-shadow: 0 0.5rem 1rem rgba(62, 73, 94, 0.25);
      color: ${(props) => props.theme.color.white};
      background: ${(props) => props.theme.color.dark};
      transition: 0.25s ease all;

      &:hover,
      &:focus {
        opacity: 0.85;
        transform: translate3d(2.5%, -2.5%, 0);
        outline: none;
      }

      &.blue {
        background: ${(props) => props.theme.color.blue};
      }

      &.yellow {
        background: ${(props) => props.theme.color.yellow};
      }

      ${media('mobile')} {
        width: 100%;
        margin: 1rem 0 0;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
      }
    }

    ${media('mobile')} {
      width: 100%;
      flex: none;
      font-size: 2.5rem;
      text-align: center;
      margin: 2rem 0 0;
    }
  }

  img {
    width: 10rem;
    height: auto;

    &.mobile {
      display: none;

      ${media('mobile')} {
        display: block;
      }
    }

    &.desktop {
      display: block;

      ${media('mobile')} {
        display: none;
      }
    }
  }
`;

export default Encyclopedia;
