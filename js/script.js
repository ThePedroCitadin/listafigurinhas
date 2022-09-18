const lista_repetidas = ['FWC2', 'QAT11',
    'QAT4',
    'QAT2',
    'ECU11',
    'SEN10',
    'SEN1',
    'NED7',
    'NED4',
    'NED13',
    'IRN10',
    'IRN1',
    'IRN10',
    'WAL5',
    'WAL18',
    'WAL18',
    'WAL19',
    'ARG19',
    'ARG15',
    'ARG19',
    'ARG15',
    'ARG5',
    'KSA13',
    'MEX12',
    'MEX19',
    'POL17',
    'POL8',
    'POL6',
    'FRA5',
    'FRA6',
    'FRA14',
    'FRA14',
    'AUS11',
    'DEN13',
    'DEN11',
    'DEN9',
    'DEN13',
    'DEN4',
    'DEN5',
    'DEN11',
    'TUN8',
    'TUN16',
    'ESP17',
    'ESP1',
    'CRC13',
    'GER4',
    'GER16',
    'JPN1',
    'BEL5',
    'CAN1',
    'MAR11',
    'CRO12',
    'CRO9',
    'BRA9',
    'BRA14',
    'SRB8',
    'SRB9',
    'SUI11',
    'SUI14',
    'CMR13',
    'CMR19',
    'POR10',
    'POR17',
    'POR19',
    'GHA8',
    'GHA19',
    'GHA6',
    'URU3',
    'URU3',
    'FWC24',
    'FWC24']

const lista_faltantes = ['FWC3',
    'FWC4',
    'FWC5',
    'FWC6',
    'FWC9',
    'FWC12- em espera',
    'FWC16',
    'QAT1',
    'QAT3',
    'QAT6',
    'QAT7',
    'QAT8',
    'QAT9',
    'QAT13- em espera',
    'QAT14',
    'QAT16',
    'QAT18',
    'QAT19',
    'ECU2',
    'ECU5',
    'ECU9',
    'ECU10',
    'ECU15',
    'ECU16',
    'ECU17',
    'ECU19',
    'SEN2 - em espera',
    'SEN3',
    'SEN5',
    'SEN8- em espera',
    'SEN11',
    'SEN13',
    'SEN14- em espera',
    'SEN16',
    'SEN17- em espera',
    'SEN18',
    'NED1',
    'NED2',
    'NED6',
    'NED9',
    'NED14',
    'NED15',
    'NED18',
    'ENG2',
    'ENG5',
    'ENG10',
    'ENG11',
    'ENG14- em espera',
    'ENG15',
    'ENG16',
    'ENG18',
    'ENG19',
    'IRN2',
    'IRN5',
    'IRN6',
    'IRN8',
    'IRN9',
    'IRN11',
    'IRN13',
    'IRN14',
    'IRN17',
    'USA1',
    'USA2',
    'USA3',
    'USA4',
    'USA5',
    'USA6',
    'USA7',
    'USA8',
    'USA9- em espera',
    'USA10',
    'USA13',
    'USA15',
    'USA16',
    'USA17',
    'USA18',
    'USA20',
    'WAL3',
    'WAL4',
    'WAL6',
    'WAL8',
    'WAL9',
    'WAL10',
    'WAL11',
    'WAL12- em espera',
    'WAL13- em espera',
    'WAL17',
    'WAL20',
    'ARG3',
    'ARG4',
    'ARG6',
    'ARG8',
    'ARG9',
    'ARG12',
    'ARG13',
    'ARG16',
    'ARG18',
    'ARG20',
    'KSA1',
    'KSA2- em espera',
    'KSA3',
    'KSA4- em espera',
    'KSA5',
    'KSA6',
    'KSA8',
    'KSA10',
    'KSA11',
    'KSA12',
    'KSA14- em espera',
    'KSA15',
    'MEX3',
    'MEX4',
    'MEX5',
    'MEX6- em espera',
    'MEX9',
    'MEX10',
    'MEX11',
    'MEX14',
    'MEX16- em espera',
    'MEX18',
    'POL1',
    'POL2',
    'POL9',
    'POL12- em espera',
    'POL13',
    'POL14',
    'POL15',
    'POL16',
    'POL19',
    'FRA1',
    'FRA2',
    'FRA7',
    'FRA8',
    'FRA10',
    'FRA11',
    'FRA13',
    'FRA15- em espera',
    'FRA17',
    'FRA18',
    'FRA19',
    'FRA20',
    'AUS4',
    'AUS5',
    'AUS8',
    'AUS9',
    'AUS10',
    'AUS12',
    'AUS13',
    'AUS14',
    'AUS15',
    'AUS16',
    'AUS17',
    'AUS18',
    'AUS20',
    'DEN3',
    'DEN7',
    'DEN10',
    'DEN12',
    'DEN15',
    'DEN19',
    'TUN3- em espera',
    'TUN4',
    'TUN7',
    'TUN9',
    'TUN10',
    'TUN11',
    'TUN13',
    'TUN14',
    'TUN15',
    'TUN20',
    'ESP2',
    'ESP4',
    'ESP6',
    'ESP8',
    'ESP10',
    'ESP11',
    'ESP13- em espera',
    'ESP14',
    'ESP15',
    'ESP16',
    'ESP18',
    'ESP19',
    'CRC1',
    'CRC3',
    'CRC5',
    'CRC6',
    'CRC9',
    'CRC10- em espera',
    'CRC11',
    'CRC15',
    'CRC17',
    'CRC20- em espera',
    'GER2',
    'GER3',
    'GER5',
    'GER7',
    'GER11',
    'GER18',
    'GER19',
    'JPN4- em espera',
    'JPN5',
    'JPN6',
    'JPN7',
    'JPN10',
    'JPN11',
    'JPN12',
    'JPN14',
    'JPN15- em espera',
    'JPN16- em espera',
    'JPN17',
    'BEL1',
    'BEL2',
    'BEL6',
    'BEL7',
    'BEL8',
    'BEL12',
    'BEL13',
    'BEL15',
    'BEL20',
    'CAN2',
    'CAN4',
    'CAN5',
    'CAN7',
    'CAN6',
    'CAN17',
    'CAN18',
    'MAR4- em espera',
    'MAR8',
    'MAR9',
    'MAR10',
    'MAR14',
    'MAR15',
    'MAR16',
    'MAR20',
    'CRO1',
    'CRO2',
    'CRO10',
    'CRO15',
    'CRO16',
    'CRO17',
    'CRO18',
    'CRO19',
    'CRO20',
    'BRA2',
    'BRA3',
    'BRA4',
    'BRA5',
    'BRA10',
    'BRA11',
    'BRA15- em espera',
    'BRA16',
    'BRA17',
    'BRA18',
    'BRA20',
    'SRB1',
    'SRB2',
    'SRB4',
    'SRB5',
    'SRB7',
    'SRB12',
    'SRB17- em espera',
    'SRB20',
    'SUI3',
    'SUI5',
    'SUI6',
    'SUI9',
    'SUI13',
    'SUI16- em espera',
    'SUI17',
    'SUI18',
    'CMR1',
    'CMR4',
    'CMR6',
    'CMR7',
    'CMR9',
    'CMR10',
    'CMR11',
    'CMR12',
    'CMR18',
    'POR1',
    'POR2',
    'POR3',
    'POR5- em espera',
    'POR7',
    'POR9',
    'POR12',
    'POR13',
    'POR14',
    'POR15',
    'POR16',
    'POR20',
    'GHA1',
    'GHA4',
    'GHA9',
    'GHA10- em espera',
    'GHA12',
    'GHA13',
    'GHA14- em espera',
    'GHA15',
    'GHA18',
    'URU1 - em espera',
    'URU5',
    'URU6',
    'URU7- em espera',
    'URU8',
    'URU9',
    'URU12- em espera',
    'URU13',
    'URU15',
    'URU16',
    'URU18',
    'URU19',
    'URU20',
    'KOR1',
    'KOR4',
    'KOR5',
    'KOR6',
    'KOR10',
    'KOR15- em espera',
    'KOR16',
    'KOR18',
    'FWC20',
    'FWC21',
    'FWC23',
    'C1',
    'C2',
    'C3',
    'C4',
    'C5',
    'C6',
    'C7',
    'C8'
]
function listar() {
    for (var i = 0; i < lista_repetidas.length; i++) {
        ///lista repetidas
        let listarepetidashtml = document.querySelector("#lista_repetidas")
        const br = document.createElement('br')
        const p = document.createElement('p')
        p.textContent = lista_repetidas[i]
        //listarepetidashtml.appendChild(br)
        listarepetidashtml.appendChild(p)

    }
    ///lista faltantes
    for (var i = 0; i < lista_faltantes.length; i++) {
        let listafaltanteshtml = document.querySelector("#lista_faltantes")
        const br = document.createElement('br')
        const p = document.createElement('p')
        p.textContent = lista_faltantes[i]
        //listafaltanteshtml.appendChild(br)
        listafaltanteshtml.appendChild(p)
    }
}