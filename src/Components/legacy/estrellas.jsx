export function Estrellas(){
    let fill = '{fill: #e84141}';

    let estrellaVacia = `<svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.4 9.02">
            <defs>
                <style>
                    .cls-1 {fill}
                </style>
            </defs>
            <g id="Capa_1-2" data-name="Capa 1">
                <path className="cls-1"
                      d="M2.32,9.02c-.18,0-.35-.05-.5-.16-.3-.22-.42-.6-.31-.95l.72-2.21-1.88-1.36c-.3-.22-.42-.6-.31-.95.12-.35.44-.59.81-.59h2.32l.72-2.21c.11-.35.44-.59.81-.59s.7.24.81.59l.72,2.21h2.32c.37,0,.7.24.81.59.11.35-.01.73-.31.95l-1.88,1.36.72,2.21c.11.35,0,.73-.31.95-.3.22-.7.22-1,0l-1.88-1.36-1.88,1.36c-.15.11-.33.16-.5.16ZM4.7,6.46c.17,0,.35.05.5.16l1.6,1.16-.61-1.88c-.11-.35.01-.73.31-.95l1.59-1.16h-1.97c-.37,0-.7-.24-.81-.59l-.61-1.88-.61,1.88c-.11.35-.44.59-.81.59h-1.97l1.6,1.16c.3.22.42.6.31.95l-.61,1.88,1.6-1.16c.15-.11.33-.16.5-.16Z"/>
            </g>
        </svg>`;

    let arrayEstrellas = [{estrellaVacia},{estrellaVacia},{estrellaVacia},{estrellaVacia},{estrellaVacia},];


    return <>
    {arrayEstrellas.map((estrella) => {
        <div>{estrella}</div>
    })}

    </>

}