// import i18n from"i18next"
// import {initReactI18next} from 'react-i18next'
// import common_en from '../launguage/en.json';
// import common_un from '../launguage/un.json';

// const resources ={
//     en:{
//         translation: common_en
//     },
//     un:{
//         translation: common_un
//     }
// }
//  const data=   localStorage.getItem('language')
//  console.log(data);
// i18n
// .use(initReactI18next)
// .init({
//     resources,
//     lng:'un',
//     keySeparator:false,
//     interpolation:{
//         escapeValue:false
//     }
// })



// // import ReactDOM from 'react-dom';
// // import React, { Component } from 'react';
// // import LocalizedStrings from 'react-localization';

// // let strings = new LocalizedStrings({
// //   en:{
// //     how:"How do you want your egg today?",
// //     boiledEgg:"Boiled egg",
// //     softBoiledEgg:"Soft-boiled egg",
// //     choice:"How to choose the egg"
// //   },
// //   it: {
// //     how:"Come vuoi il tuo uovo oggi?",
// //     boiledEgg:"Uovo sodo",
// //     softBoiledEgg:"Uovo alla coque",
// //     choice:"Come scegliere l'uovo"
// //   }
// //  });

// // class App extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       language: 'en'
// //     }

// //     this.handleLanguageChange = this.handleLanguageChange.bind(this);
// //   }

// //   handleLanguageChange(e) {
// //     e.preventDefault();
// //     let lang = e.target.value;
// //     this.setState(prevState => ({
// //       language: lang
// //     }))
// //   }

// //   render() {
// //     strings.setLanguage(this.state.language);
// //     return (
// //       <div>
// //         Change Language: <select onChange={this.handleLanguageChange}>
// //           <option value="en">En- English</option>
// //           <option value="it">It- Italian</option>
// //         </select>
// //         <br /><br />
// //         {strings.how}
// //       </div>
// //     )
// //   }
// // }

// // ReactDOM.render(<App />, document.getElementById('root'));
// // >
