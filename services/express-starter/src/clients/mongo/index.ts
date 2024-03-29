import { DatabaseClient } from '@turtle/mongo';
import { MONGO_URL } from '../../environments';

const mongoClient = new DatabaseClient({
  url: MONGO_URL,
  databaseName: 'starter',
});

export default mongoClient;
