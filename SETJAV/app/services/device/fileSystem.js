import Rx from 'rxjs/Rx';
import RNFS from 'react-native-fs';

const moveFile = (source, destination) =>
    Rx.Observable.create((obs) => {
        const sourcePath = `${RNFS.DocumentDirectoryPath}/${source}`;
        const destinationPath = `${RNFS.DocumentDirectoryPath}/${destination}`;

        RNFS.moveFile(sourcePath, destinationPath)
            .then(res => obs.next(res))
            .catch(err => obs.error(err));
    });

const readFile = (source, encoding) =>
    Rx.Observable.create((obs) => {
        const openFile = `${RNFS.DocumentDirectoryPath}/${source}`;

        RNFS.readFile(openFile, encoding || 'utf8')
            .then(res => obs.next(res))
            .catch(err => obs.error(err));
    });

const fileExists = source =>
    Rx.Observable.create((obs) => {
        const file = `${RNFS.DocumentDirectoryPath}/${source}`;

        RNFS.exists(file)
            .then(exists => obs.next(exists))
            .catch(err => obs.error(err));
    });

const deleteFile = source =>
    fileExists(source)
        .mergeMap(exists => Rx.Observable.create((obs) => {
            if (!exists) return obs.next(true);

            const sourcePath = `${RNFS.DocumentDirectoryPath}/${source}`;

            RNFS.unlink(sourcePath)
                .then(() => obs.next(true))
                .catch(() => obs.next(false));
        }));

const fileDownload = (source, destination) =>
    deleteFile(destination)
        .mergeMap(() => Rx.Observable.create((obs) => {
            const tempFile = `tmp_${destination}`;
            const saveToTempFile = `${RNFS.DocumentDirectoryPath}/${tempFile}`;

            const downloadFileOptions = {
                fromUrl: source,
                toFile: saveToTempFile,
                progressDivider: 2,
                background: false,
                begin: (res) => {
                    obs.next({ id: res.jobId, percent: 0, complete: false });
                },
                progress: (res) => {
                    const percent = (res.bytesWritten / res.contentLength) * 100;
                    obs.next({ id: res.jobId, percent, complete: false });
                },
            };

            const download = RNFS.downloadFile(downloadFileOptions);

            download
                .promise
                .then((res) => {
                    moveFile(tempFile, destination)
                        .map(() => ({ id: res.jobId, percent: 100, complete: true }))
                        .subscribe(obs);
                })
                .catch(err => obs.error(err));
        }));

const filePath = source =>
    Rx.Observable.create((obs) => {
        const filePath = `${RNFS.DocumentDirectoryPath}/${source}`;

        obs.next(filePath);
    });

const getDiskSpace = () =>
    Rx.Observable.create((obs) => {
        RNFS.getFSInfo()
            .then(data => obs.next(data))
            .catch(error => obs.next({ error: error.message }));
    });

export default {
    fileDownload,
    readFile,
    fileExists,
    filePath,
    moveFile,
    deleteFile,
    getDiskSpace,
};
