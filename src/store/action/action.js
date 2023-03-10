// import firestore from '@react-native-firebase/firestore';
// import { Alert } from 'react-native';
// import { firebase } from '@react-native-firebase/auth';
import ActionTypes from '../constant/constant';

import axios from "axios";
import moment from "moment/moment";

// export function NowTV(bolean) {
//     return dispatch => {

//         console.log(user.uid, 'currentUserscurrentUsers')


//     }

// }

export const NowTV = () => {
    return async (dispatch) => {
        console.log(moment().format('YYYY-MM-DD'), 'resprespresprespresp')
        try {
            const option = {
                method: 'GET',
                url: `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${moment().format('YYYY-MM-DD')}`,
                headers: {
                    'X-RapidAPI-Key': '333a6e9d17msh885d0fa8107a10bp149775jsn8302b5c9acf2',
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
                },
            };
            var resp = await axios(option);
            if (resp.status == 200) {
                dispatch({ type: ActionTypes.NOWTV, payload: resp?.data?.response.splice(0, 5) });
            } else {
                alert('some thing went wrong')
            }
        }
        catch (err) {
        }
    }
}