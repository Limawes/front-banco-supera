import React from "react"
import { Box, Button, Grid, MenuItem, Stack, Table, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import { Search } from "@mui/icons-material"

function Transfers() {
  return (

    // combo box {datas e operador}
    <>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
      >
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="space-evenly"
        >
          <Grid item xs={3}>
            <TextField
              select
              label="Data de início"
              variant="outlined"
            >
              <MenuItem>teste</MenuItem>
              <MenuItem>teste1</MenuItem>
              <MenuItem>teste2</MenuItem>
              <MenuItem>teste3</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={3}>
            <TextField
              select
              label="Data final"
              variant="outlined"
            >
              <MenuItem>teste</MenuItem>
              <MenuItem>teste1</MenuItem>
              <MenuItem>teste2</MenuItem>
              <MenuItem>teste3</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={3}>
            <TextField
              select
              label="Nome do operador transacionado"
              variant="outlined"
            >
              <MenuItem>teste</MenuItem>
              <MenuItem>teste1</MenuItem>
              <MenuItem>teste2</MenuItem>
              <MenuItem>teste3</MenuItem>
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
          <Grid item xs={2}>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="flex-end"
            >
              <Button
                variant="contained"
                color="success"
                endIcon={<Search />}
              >
                Pesquisar
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>

    </>
  )
}

export default Transfers