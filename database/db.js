import mongoose from 'mongoose';

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongoConnection = {
    isConnected: 0,
    connection: undefined
}

export const connect = async () => {

    if (mongoConnection.isConnected) {
        console.log('Ya estabamos conectados');
        return mongoConnection.connection
    }

    if (mongoose.connections.length > 0) {
        mongoConnection.isConnected = mongoose.connections[0].readyState;
        mongoConnection.connection = mongoose.connection

        if (mongoConnection.isConnected === 1) {
            console.log('Usando conexión anterior');
            return mongoConnection.connection;
        }

        await mongoose.disconnect();
    }

    await mongoose.connect(process.env.MONGO_URL || '');
    mongoConnection.isConnected = 1;
    console.log('Conectado a MongoDB:', process.env.MONGO_URL);
    return mongoose.connection;
}

export const disconnect = async () => {


    if (process.env.NODE_ENV === 'development') return;

    if (mongoConnection.isConnected === 0) return;

    await mongoose.disconnect();
    mongoConnection.isConnected = 0;

    console.log('Desconectado de MongoDB');
}