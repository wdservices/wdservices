import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy,
  Timestamp
} from 'firebase/firestore';
import { db } from '../../../src/firebase';
import { AITool } from '../../types/admin';

const TOOLS_COLLECTION = 'tools';

export const firestoreApi = {
  // Get all AI tools
  getTools: async (): Promise<AITool[]> => {
    try {
      console.log('Fetching tools from Firestore...');
      const q = query(collection(db, TOOLS_COLLECTION), orderBy('createdAt', 'desc'));
      console.log('Query created:', q);
      
      const querySnapshot = await getDocs(q);
      console.log('Query completed, documents found:', querySnapshot.docs.length);
      
      if (querySnapshot.empty) {
        console.warn('No documents found in collection:', TOOLS_COLLECTION);
      } else {
        querySnapshot.docs.forEach((doc, index) => {
          console.log(`Document ${index + 1}:`, { id: doc.id, data: doc.data() });
        });
      }
      
      const tools = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as AITool));
      
      console.log('Processed tools:', tools);
      return tools;
    } catch (error) {
      console.error('Error getting tools:', error);
      if (error instanceof Error) {
        console.error('Error details:', {
          message: error.message,
          name: error.name,
          stack: error.stack
        });
      }
      throw error;
    }
  },

  // Get a single AI tool by ID
  getTool: async (id: string): Promise<AITool | null> => {
    try {
      const docRef = doc(db, TOOLS_COLLECTION, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        } as AITool;
      }
      return null;
    } catch (error) {
      console.error('Error getting tool:', error);
      throw error;
    }
  },

  // Add a new AI tool
  addTool: async (tool: Omit<AITool, 'id'>): Promise<string> => {
    try {
      const docRef = await addDoc(collection(db, TOOLS_COLLECTION), {
        ...tool,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error adding tool:', error);
      throw error;
    }
  },

  // Update an existing AI tool
  updateTool: async (id: string, tool: Partial<AITool>): Promise<void> => {
    try {
      const docRef = doc(db, TOOLS_COLLECTION, id);
      await updateDoc(docRef, {
        ...tool,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error updating tool:', error);
      throw error;
    }
  },

  // Delete an AI tool
  deleteTool: async (id: string): Promise<void> => {
    try {
      const docRef = doc(db, TOOLS_COLLECTION, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting tool:', error);
      throw error;
    }
  },

  // Search tools by name or description
  searchTools: async (searchTerm: string): Promise<AITool[]> => {
    try {
      const q = query(
        collection(db, TOOLS_COLLECTION),
        where('keywords', 'array-contains', searchTerm.toLowerCase())
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as AITool));
    } catch (error) {
      console.error('Error searching tools:', error);
      throw error;
    }
  }
};
