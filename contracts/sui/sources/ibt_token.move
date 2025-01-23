module ibt_token::ibt {
    use sui::tx_context::{Self, TxContext};
    use sui::coin::{Self, Coin, TreasuryCap};
    use sui::transfer;
    use std::option;

    struct IBT has drop {}

    fun init(witness: IBT, ctx: &mut TxContext) {
        let (treasury_cap, metadata) = coin::create_currency(
            witness, 
            9, 
            b"IBT", 
            b"Inter Blockchain Token", 
            b"", 
            option::none(), 
            ctx
        );
        
        transfer::public_transfer(treasury_cap, tx_context::sender(ctx));
        transfer::public_share_object(metadata);
    }

    public entry fun mint(
        treasury_cap: &mut TreasuryCap<IBT>, 
        amount: u64, 
        recipient: address,
        ctx: &mut TxContext
    ) {
        coin::mint_and_transfer(treasury_cap, amount, recipient, ctx);
    }

    public entry fun burn(
        treasury_cap: &mut TreasuryCap<IBT>,
        coin: Coin<IBT>
    ) {
        coin::burn(treasury_cap, coin);
    }
}
