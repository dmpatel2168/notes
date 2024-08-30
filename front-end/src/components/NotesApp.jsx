import React, { useState, useEffect } from 'react';
import { 
  AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, 
  CardActions, Button, TextField, Dialog, DialogTitle, DialogContent, 
  DialogActions, IconButton, Snackbar
} from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', content: '' });
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch('http://localhost:3000');
      if (!response.ok) {
        throw new Error('Failed to fetch notes');
      }
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
      setSnackbar({ open: true, message: 'Failed to fetch notes' });
    }
  };

  const createNote = async () => {
    if (newNote.title.trim() === '' || newNote.content.trim() === '') return;
    try {
      const response = await fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote),
      });
      if (!response.ok) {
        throw new Error('Failed to create note');
      }
      const createdNote = await response.json();
      setNotes([...notes, createdNote]);
      setNewNote({ title: '', content: '' });
      setOpenDialog(false);
      setSnackbar({ open: true, message: 'Note created successfully' });
    } catch (error) {
      console.error('Error creating note:', error);
      setSnackbar({ open: true, message: 'Failed to create note' });
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete note');
      }
      setNotes(notes.filter(note => note.id !== id));
      setSnackbar({ open: true, message: 'Note deleted successfully' });
    } catch (error) {
      console.error('Error deleting note:', error);
      setSnackbar({ open: true, message: 'Failed to delete note' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Notes Application
          </Typography>
          <IconButton color="inherit" onClick={() => setOpenDialog(true)}>
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {notes.map((note) => (
            <Grid item xs={12} sm={6} md={4} key={note.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {note.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {note.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    color="secondary" 
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteNote(note.id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Create New Note</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
            value={newNote.title}
            onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Content"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={newNote.content}
            onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={createNote}>Create</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />
    </ThemeProvider>
  );
};

export default NotesApp;