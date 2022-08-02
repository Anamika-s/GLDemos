import logo from './logo.svg';
import './App.css';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
function App() {
  const {t} = useTranslation();
  const number_of_days = 10;
  const languages =
  [
    {
      code:'fr',
      name:'Français',
      countryCode:'fr'
    },
    
    {
      code:'en',
      name:'English',
      countryCode:'gb'
    },
    
    {
      code:'ar',
      name:'العربية',
      countryCode:'sa'
    }
  ]
  return (
    <div className="container">
     
      <div className='d-flex justify-content-end'>
    


      <div className="dropdown">
      
  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    {languages.map(({code , name , countryCode}) =>(
    <li key={countryCode}> 
    <button className='dropdown-item' onClick={()=> { console.log(code); i18next.changeLanguage(code) }}>
      <span className={`flag-icon flag-icon-${countryCode}`}> </span>{name}</button>
    </li>
    ))}
    </ul>
</div>
      </div>
      <div className="d-flex flex-column align-items-start">
          <h1 className="font-weight-normal"> {t('welcome_message')} </h1>
          <p>
           {t('app_title')}  
           
           {t('days_since_release', {number_of_days})} </p>
            </div>

    </div>
  );
}

export default App;
