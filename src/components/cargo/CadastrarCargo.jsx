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
import { useNavigate } from "react-router-dom"

function Setor() {
  const [cargo, setCargo] = React.useState([])
  const [setor, setSetor] = React.useState([])
  //Cargo
  const [id_cargo, setIdCargo] = React.useState()
  const [nomeCargo, setNomeCargo] = React.useState('')
  const [setor_id, setSetorId] = React.useState()
  //Setor
  const [nomeSetor, setNomeSetor] = React.useState('')


  //onChange Setor
  const onChangeIdCargo = (e) => {
    const id_cargo = e.targe.value
    setIdCargo(id_cargo)
  }

  const onChangeNomeCargo = (e) => {
    const nomeCargo = e.target.value
    setNomeCargo(nomeCargo)
  }

  // const onChangeDescricao = (e) => {
  //   const descricao = e.target.value
  //   setDescricao(descricao)
  // }

  // onchange Setor

  const onChangeNomeSetor = (e) => {
    const nomeSetor = e.target.value
    setNomeSetor(nomeSetor)
    setSetorId(nomeSetor)
    console.log(nomeSetor)
  }

  const navigate = useNavigate()


  const postCargo = async () => {
    await FirmaService.CriarCargo(nomeCargo, setor_id).then((response) => {
      setCargo(response.data)
      console.log(response.data)
      navigate('/cargo')
    })
  }

  const findSetor = async () => {
    await FirmaService.listSetor().then((response) => {
      setSetor(response.data)
    })
  }

  const findCargo = async () => {
    await FirmaService.listCargo().then((response) => {
      setCargo(response.data)
    })
  }

  useEffect(() => {
    findCargo()
    findSetor()
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
            label="Nome do Cargo"
            variant="outlined"
            onChange={onChangeNomeCargo}
            value={nomeCargo}
          >
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField
            select
            label="Setor"
            variant="outlined"
            onChange={onChangeNomeSetor}
            value={setor_id}
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
            label="Atribuição"
            variant="outlined"
          // onChange={onChangeDescricao}
          // value={descricao}
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
        <Grid item xs={5}>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="flex-end"
          >

            <Button
              variant="contained"
              color="success"
              endIcon={<Add />}
              onClick={() => { postCargo() }}
            >
              Cadastrar
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
                <TableCell className="tc">Nome do Cargo</TableCell>
                <TableCell className="tc">SETOR</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cargo && cargo.length > 0 && cargo.map((index) => (
                <TableRow>
                  <TableCell className="tc">{index.nomeCargo}</TableCell>
                  <TableCell className="tc">{index.setor_id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Box>
  )
}

export default Setor