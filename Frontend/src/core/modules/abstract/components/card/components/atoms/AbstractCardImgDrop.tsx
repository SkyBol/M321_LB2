import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ImageService from '../../../../../../../domain/modules/bootle/services/ImageService';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

type AbstractDropDownParams = {
    id: string;
    formik: any;
};

const AbstractCardImgDrop = ({ id, formik }: AbstractDropDownParams) => {
    const image: string = formik.values[id];

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];

        ImageService.save(file)
            .then(({ data: { id: savedImageId } }) => {
                formik.setFieldValue(id, savedImageId);
            });
    }, [formik, id]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div
            {...getRootProps()}
            style={{
                border: '1px solid #d4af37',
                width: 200,
                height: 250,
                backgroundColor: 'transparent',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden', 
            }}
        >
            <input {...getInputProps()} style={{ display: 'none' }} />
            {
                isDragActive ?
                    <p>Genau so!</p> :
                    <AddPhotoAlternateIcon className='absolute-svg' style={{ marginTop:"50%",marginLeft:"80px",fontSize: '40px', color: "#d4af37" }} />
            }
            {image && (
                <img
                    src={image && ImageService.imageUrl(image)}
                    alt="Uploaded Liquor Image"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                       
                    }}
                />
            )}
        </div>
    );
};

export default AbstractCardImgDrop;
