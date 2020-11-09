import React from 'react';
import Rainbow from './hoc/Rainbow';

const Contact = () =>{
    return (
        <div>
            <div className="container">
                <h4 className="center">Contact</h4>
                <p>Cmd de reactı kurmak için npm install -g create-react-app yazıyorum ancak "no such file or directory" yazısı çıkıyor. yabancı kaynaklarıda inceledim ama hatanın çözümüne ulaşamadım.</p>
            </div>
        </div>
    )
}

export default Rainbow(Contact);