pub mod snowflake;

pub type ID = u32;
pub type B24 = u32;

pub struct CompressedMessage {
    // maybe 1 bit for same sender?
    sender: ID,
    content: String,
}

pub struct CompressedTimestamp {
    delta_timestamp: u32,
}

pub enum CompressedPacket {
    CompressedMessage(CompressedMessage),
    CompressedTimestamp(CompressedTimestamp),
}

pub struct CompressedMessages {
    initial_timestamp: B24,
    packets: Vec<CompressedPacket>,
}

fn example() {
    //   let messages = CompressedMessages {
    //     initialTimestamp: todo!(),
    //     packets: todo!(),
    // }
}
