import { useState } from 'react';
import { View, Text, StyleSheet   } from 'react-native';
import * as Typography from '../styles/typography'
import { FontAwesome6 } from '@expo/vector-icons';
// import { getFunctions, httpsCallable } from "firebase/functions";
// import naturalTextToDurationSecs from '../utilities/naturalTextToDurationSecs.js';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAhuXUl0U4FXaTqiV3B2Kbi27zcBdIL5m8",
//   authDomain: "kc-smart-timers.firebaseapp.com",
//   projectId: "kc-smart-timers",
//   storageBucket: "kc-smart-timers.appspot.com",
//   messagingSenderId: "692655789255",
//   appId: "1:692655789255:web:d593e7bc6aa74b2044dae2"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const functions = getFunctions(app ,'europe-west1');
// const getAutocompleteResults = httpsCallable(functions, 'getAutocompleteResults');
// const searchGoogle = httpsCallable(functions, "searchGoogle");
// const queryQA = httpsCallable(functions, "queryQA");

const TimerName = (props) => {
  const [autocompleteResults, setAutocompleteResults] = useState([]);
  const [inputTimer, setInputTimer] = useState(null);

//   const handleNameChange = (e) => {
//     const curName = e.target.value;
//     nameRef.current = curName;

//     clearTimeout(inputTimer);
//     let timeout = setTimeout(async () => {

//       console.log("Fetching results...");
//       const autocompRes = getAutocompleteResults({ q: `how long to ${curName}` });
//       const autocompList = (await autocompRes).data;
//       setAutocompleteResults(autocompList);
//       console.log("autocompleteResults:", autocompList)

//       var autocompletedQuery = `how long to ${curName}${autocompList[0] ? autocompList[0] : ""}?`;
//       autocompletedQuery = autocompletedQuery.replace(/\&nbsp;/g, '');
//       const searchRes = searchGoogle({ q: autocompletedQuery});
//       const snippets = (await searchRes).data;
//       console.log("snippets:" , snippets[0], snippets[1]);
      
//       const QARes = queryQA({"inputs": {
//         "question": autocompletedQuery,
//         "context": snippets[0]
//       }});
//       // console.log(QARes);
//       const score = (await QARes).data.score;
//       const answer = (await QARes).data.answer;
//       console.log(score, answer);
//       if (score > 0.5) {
//         const durationSecs = naturalTextToDurationSecs(answer);
//         if (durationSecs === undefined) {
//           alert("Google is doodoo");
//         } else {
//           console.log("Seconds to set:", durationSecs);
//           setTimerDuration(durationSecs);
//         }
//       } else {
//         alert("Not sure what time to set :(")
//       }
      
//     }, 300);
//     setInputTimer(timeout);
//   }
//   const handleNameBlur = (e) => {
//     setTimerName(e.target.textContent);
//   }

  return (
    <View style={styles.layout}>
      <Text style={[styles.text, Typography.h3]}>
        {props.name}
      </Text>
      {/* {autocompleteResults[0] && <div>{autocompleteResults[0]}</div>} */}
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  text: {
    flex: 1
  }
});

export default TimerName;