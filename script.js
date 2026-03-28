function calcular() {
    const bruto = parseFloat(document.getElementById('valorBruto').value);
    const km = parseFloat(document.getElementById('distanciaKM').value);
    const divRes = document.getElementById('resultado');

    if (isNaN(bruto) || isNaN(km)) {
        alert("Por favor, preencha os valores corretamente.");
        return;
    }

    const custoKM = 0.50; 
    const custoTotal = km * custoKM;
    const liquido = bruto - custoTotal;
    const margem = (liquido / bruto) * 100;

    divRes.classList.remove('hidden');
    document.getElementById('resLucro').innerHTML = `Lucro Líquido: <b>R$ ${liquido.toFixed(2)}</b>`;
    document.getElementById('resMargem').innerText = `Margem: ${margem.toFixed(1)}% | Custo Rota: R$ ${custoTotal.toFixed(2)}`;

    const msg = document.getElementById('msg');
    
    if (liquido < 7) {
        msg.innerText = "⚠️ POUCO LUCRO! CUIDADO.";
        msg.style.color = "#ff5252";
        divRes.classList.add('alerta');
    } else {
        msg.innerText = "✅ ROTA BOA! PODE IR.";
        msg.style.color = "#00e676";
        divRes.classList.remove('alerta');
    }
}