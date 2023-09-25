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
  const [setor, setSetor] = React.useState([])
  //Setor
  const [id_setor, setIdSetor] = React.useState()
  const [nomeSetor, setNomeSetor] = React.useState('')
  const [descricao, setDescricao] = React.useState('')


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

  const navigate = useNavigate()


  const postSetor = async () => {
    await FirmaService.CriarSetor(nomeSetor, descricao).then((response) => {
      setSetor(response.data)
      console.log(response.data)
      navigate('/setor')
    })
  }

  const findSetor = async () => {
    await FirmaService.listSetor().then((response) => {
      setSetor(response.data)
    })
  }

  useEffect(() => {
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
        <Grid item xs={2}>
          <TextField
            label="Nome do Setor"
            variant="outlined"
            onChange={onChangeNomeSetor}
            value={nomeSetor}
          >
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Descricao"
            variant="outlined"
            onChange={onChangeDescricao}
            value={descricao}
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
            onClick={() => { postSetor() }}
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
                <TableCell className="tc">Nome do Setor</TableCell>
                <TableCell className="tc">Descrição</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {setor && setor.length > 0 && setor.map((index) => (
                <TableRow>
                  <TableCell className="tc">{index.nomeSetor}</TableCell>
                  <TableCell className="tc">{index.descricao}</TableCell>
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