#### Requisição:

```r
GET http://127.0.0.1:9090/rastrear/{codigo_de_rastreio}
```

#### Execução:

```r
node ./index.js
```

#### Pacote encontrado

```json
[
  {
    "data": "26/02/2023",
    "hora": "16:53",
    "origem": "PA MELI",
    "status": "COLETA SOLICITADA",
    "destino": "PA MELI",
    "documento": "Sem documento"
  },
  {
    "data": "28/02/2023",
    "hora": "06:53",
    "origem": "PA MELI",
    "status": "EMISSAO ",
    "destino": "PA MELI",
    "documento": "Sem documento"
  },
  {
    "data": "01/03/2023",
    "hora": "13:41",
    "origem": "TECA MATRIZ",
    "status": "ENTRADA ",
    "destino": "TECA MATRIZ",
    "documento": "Sem documento"
  },
  {
    "data": "01/03/2023",
    "hora": "13:49",
    "origem": "TECA MATRIZ",
    "status": "TRANSFERENCIA ",
    "destino": "CO BELEM 02",
    "documento": "05001032313640"
  },
  {
    "data": "04/03/2023",
    "hora": "02:57",
    "origem": "CO BELEM 02",
    "status": "ENTRADA ",
    "destino": "CO BELEM 02",
    "documento": "Sem documento"
  },
  {
    "data": "06/03/2023",
    "hora": "20:21",
    "origem": "CO BELEM 02",
    "status": "EM ROTA ",
    "destino": "CO BELEM 02",
    "documento": "22623742"
  },
  {
    "data": "09/03/2023",
    "hora": "18:57",
    "origem": "CO BELEM 02",
    "status": "ENTREGUE ",
    "destino": "CO BELEM 02",
    "documento": "Sem documento"
  }
]
```

#### Error: pacote não encontrado

```json
{
  "error": "Pacote não encontrado"
}
```
