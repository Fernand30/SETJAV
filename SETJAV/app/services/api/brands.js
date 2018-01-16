import Rx from 'rxjs/Rx';
import { config } from '../../config';

export const getBrands = () =>
    Rx.Observable.create((obs) => {
        const url = `${config.BASE_API}/brands`;
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then((data) => {
                obs.next(data);
            })
            .catch(err => obs.error(err));
    });
