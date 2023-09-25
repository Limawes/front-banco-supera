import React, { useEffect, useState } from "react"
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material"
import { Add, Search } from "@mui/icons-material"
import '../../assets/css/App.css'
import FirmaService from "../../../service/firma.service"

function Filtro() {
  const [firma, setFirma] = React.useState()
  const [setor, setSetor] = React.useState([])
  const [cargo, setCargo] = React.useState([])
  const [trabalhador, setTrabalhador] = React.useState([])
  //trabalhador
  const [id_trabalhador, setIdTrabalhador] = React.useState()
  const [nomeTrabalhador, setNomeTrabalhador] = React.useState('')
  const [cpf, setCpf] = React.useState('')
  const [setor_id, setSetorId] = React.useState()
  const [cargo_id, setCargoId] = React.useState()
  //Setor
  const [id_setor, setIdSetor] = React.useState()
  const [nomeSetor, setNomeSetor] = React.useState()
  const [descricao, setDescricao] = React.useState()
  //Cargo
  const [id, setId] = React.useState()
  const [nomeCargo, setNomeCargo] = React.useState()
  // => setor_id *

  const onChangeFirma = (e) => {
    const firma = e.target.value
    setFirma(firma)
  }

  //onChange Trabalhador
  const onChangeIdTrabalhador = (e) => {
    const id_trabalhador = e.target.value
    setIdTrabalhador(id_trabalhador)
  }

  const onChangeNomeTrabalhador = (e) => {
    const nomeTrabalhador = e.target.value
    setNomeTrabalhador(nomeTrabalhador)
  }

  const onChangeCpf = (e) => {
    const cpf = e.target.value
    setCpf(cpf)
  }

  const onChangeSetorId = (e) => {
    const setor_id = e.target.value
    setSetorId(setor_id)
  }

  const onChangeCargoId = (e) => {
    const cargo_id = e.target.value
    setCargoId(cargo_id)
  }

  //onChange Setor
  const onChangeIdSetor = (e) => {
    const id_setor = e.targe.value
    setIdSetor(id_setor)
  }

  const onChangeNomeSetor = (e) => {
    const nomeSetor = e.target.value
    setNomeSetor(nomeSetor)
  }

  const onChangeDescricao = (e) => {
    const descricao = e.target.value
    setDescricao(descricao)
  }

  //onChange Cargo
  const onChangeId = (e) => {
    const id = e.target.value
    setId(id)
  }

  const onChangeNomeCargo = (e) => {
    const nomeCargo = e.target.value
    setNomeCargo(nomeCargo)
  }

  const getSetor = async () => {
    await FirmaService.listSetor().then((response) => {
      setSetor(response.data)
      console.log(response.data)
    })
  }

  const getCargo = async () => {
    await FirmaService.listCargo().then((response) => {
      setCargo(response.data)
      console.log(response.data)
    })
  }

  const getTrabalhador = async () => {
    await FirmaService.listTrabalhador().then((response) => {
      setTrabalhador(response.data)
      console.log(response.data)
    })
  }

  function alterDate(dateParams) {
    const date = new Date(dateParams)
    return date.toLocaleDateString("pt-br")
  }

  useEffect(() => {
    getTrabalhador()
    getSetor()
    getCargo()
  }, [])

  return (

    // combo box {datas e operador}
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="space-around"
      >
        <Grid item xs={3}>
          <TextField
            select
            label="Setor"
            variant="outlined"
            onChange={onChangeNomeSetor}
            value={nomeSetor}
          >
            {setor.map((index) => (
              <MenuItem
                key={index.id_setor}
                value={index.id_setor}
              >
                {index.nomeSetor}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField
            select
            label="Cargo"
            variant="outlined"
            onChange={onChangeNomeCargo}
            value={nomeCargo}
          >
            {cargo.map((index) => (
              <MenuItem
                key={index.id}
                value={index.id}
              >
                {index.nomeCargo}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="CPF"
            variant="outlined"
            onChange={onChangeCpf}
            value={cpf}
          >
          </TextField>
        </Grid>
      </Grid>
      <br />

      {/* Search button */}
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="flex-end"
        style={{ paddingRight: '8.5rem' }}

      >
        <Grid item xs={8}>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="flex-end"
          >
            <Button
              variant="contained"
              color="success"
              endIcon={<Search />}
              onClick={() => { getTrabalhador() }}
            >
              Pesquisar
            </Button>

            <Button
              variant="contained"
              color="success"
              endIcon={<Add />}
              href='/#/setor'
            >
              Cadastrar Setor
            </Button>

            <Button
              variant="contained"
              color="success"
              endIcon={<Add />}
              href='/#/cargo'
            >
              Cadastrar Cargo
            </Button>

            <Button
              variant="contained"
              color="success"
              endIcon={<Add />}
              href='/#/setor'
            >
              Cadastrar Trabalhador
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <br />
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-evenly"
      >
        <TableContainer component={Paper}>
          <Table aria-label='customized table'>
            <TableHead>
              <TableRow>
                <TableCell className="tc">Nome</TableCell>
                <TableCell className="tc">CPF</TableCell>
                <TableCell className="tc">Cargo</TableCell>
                <TableCell className="tc">Setor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trabalhador && trabalhador.map((index) => (
                <TableRow>
                  <TableCell className="tc">{index.nomeTrabalhador}</TableCell>
                  <TableCell className="tc">{index.cpf}</TableCell>
                  <TableCell className="tc">{index.nomeCargo}</TableCell>
                  <TableCell className="tc">{index.nomeSetor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Box>
  )
}

export default Filtro