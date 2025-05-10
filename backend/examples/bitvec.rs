use bitvec::prelude::*;
use from_const_fn::from_const_fn;

fn testing() {
    let bit_arr = bitarr![u32, Lsb0; 0; 80]; // wide 96
    // dbg!(bit_arr);
    let bits = bits![u16, Msb0; 0; 35]; // exact 40
    // dbg!(bits);

    let data: [u8; 2] = [0x20, 0x21];
    let bits = data.view_bits::<Msb0>();
    let (head, rest) = bits.split_at(3);
    let slice = &bits[2..4];
    // dbg!(slice);

    let slice = &data[1..];
    // dbg!(slice);

    let mut data: [u8; 2] = [0x0, 0x1];
    let mut bits = data.view_bits_mut::<Msb0>();
    bits.set(1, true);
    // dbg!(bits);

    let mut bv = bitvec![u8, Msb0;];
    bv.push(false);
    bv.push(true);
    bv.extend([true; 4].iter());
    bv.extend(&data.view_bits::<Lsb0>()[..4]);
    // dbg!(&bv);
    // println!("{:?}", &bv.as_raw_slice());

    let bits = bits![mut 0];
    let mut bit = bits.get_mut(0).unwrap();
    // dbg!(&bit);
    *bit = true;
    // dbg!(&bit);

    let mut data: [u8; 2] = [0x20, 0x21];
    // dbg!(&data);
    let mut bits = &mut data.view_bits_mut::<Lsb0>()[4..8];
    // dbg!(&bits);
    let number: u8 = bits.load();
    // dbg!(number);

    let number: u8 = 25;
    bits.store(number);
    let number: u8 = bits.load();
    // dbg!(number);
    // dbg!(&bits);
    // dbg!(&data);
}

fn fancy_iter() {
    const EIGHT: [u8; 8] = from_const_fn!(|n| (n * 4) as u8);
    let mut five = [0u8; 5];
    for (slot, byte) in five.view_bits_mut::<Msb0>().chunks_mut(5).zip(EIGHT) {
        slot.store_be(byte);
    }
    dbg!(&five.view_bits::<Msb0>().chunks(5).collect::<Vec<_>>());
}

fn compact() {
    let num = 0x44ff;
    // 0bxXXXXXXX xXXXXXXX
    let data: [u8; 4] = [0b1111_1111, 0b0101_0101, 0b0000_0000, 0b0000_0000];
    // for byte in data.view_bits::<Lsb0>().chunks(8) {
    //     let subsequent_byte = byte[0];
    //     let bits = byte[1..8];
    // }
    // dbg!(&bits[0], &bits[1..8]);
    data.view_bits::<Msb0>()
        .chunks(8)
        .take_while(|byte| byte[0])
        .for_each(|byte| println!("byte: {byte}"));
}

fn main() {
    compact();
    // fancy_iter();
}
