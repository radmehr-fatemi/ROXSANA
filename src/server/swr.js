// import useSWR from 'swr';
// import axios from 'axios';

// export const SwrGet = (endpoint, id ) => {
//     if (id) {
//         const { data, isLoading, error, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}/${id}`, (url) => (
//             axios.get(url).then(res => res.data))
//         )

//         return { data, isLoading, error, isValidating }

//     } else {
//         const { data, isLoading, error, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`, (url) => (
//             axios.get(url).then(res => res.data))
//         )

//         return { data, isLoading, error, isValidating }
//     }
// };
