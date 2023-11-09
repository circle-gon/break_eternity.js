var assert_eq_tolerance = function(error, a, b, precision = 1e-7)
{
  a = new Decimal(a);
  b = new Decimal(b);
  if (!a.isFinite() && !b.isFinite())
  {
    if (a.isNan() && b.isNan())
    {
      return;
    }
    if (a.sign == b.sign)
    {
      return;
    }
  }
  if (!a.eq_tolerance(b, precision))
  {
    console.log(error);
  }
}

var test_tetrate_ground_truth = function()
{
  console.log("test_tetrate_ground_truth")
  assert_eq_tolerance(10.5, new Decimal(10).tetrate(10.5), new Decimal("(e^9)299.92012356854593"))
  assert_eq_tolerance(10, new Decimal(10).tetrate(10), new Decimal("(e^8)10000000000"))
  assert_eq_tolerance(4, new Decimal(10).tetrate(4), new Decimal("ee10000000000"))
  assert_eq_tolerance(3.5, new Decimal(10).tetrate(3.5), new Decimal("ee299.92012356854593"))
  assert_eq_tolerance(3, new Decimal(10).tetrate(3), new Decimal("1e10000000000"))
  assert_eq_tolerance(2.5, new Decimal(10).tetrate(2.5), 8.320004641007381e299)
  assert_eq_tolerance(2, new Decimal(10).tetrate(2), 1e10)
  assert_eq_tolerance(1.5, new Decimal(10).tetrate(1.5), 299.92012356854604298)
  assert_eq_tolerance(1.1, new Decimal(10).tetrate(1.1), 15.276013187671926546)
  assert_eq_tolerance(1.09, new Decimal(10).tetrate(1.09), 14.590820857079513571, 1e-3)
  assert_eq_tolerance(1.05, new Decimal(10).tetrate(1.05), 12.243921772755051706, 1e-3)
  assert_eq_tolerance(1.01, new Decimal(10).tetrate(1.01), 10.398855358124287905, 1e-3)
  assert_eq_tolerance(1, new Decimal(10).tetrate(1), 10)
  assert_eq_tolerance(0.99, new Decimal(10).tetrate(0.99), 9.6227033506567471768, 1e-2)
  assert_eq_tolerance(0.95, new Decimal(10).tetrate(0.95), 8.3015402222604663760, 1e-2)
  assert_eq_tolerance(0.91, new Decimal(10).tetrate(0.91), 7.2270053728541153571, 1e-2)
  assert_eq_tolerance(0.5, new Decimal(10).tetrate(0.5), 2.4770056063449647580)
  assert_eq_tolerance(-1, new Decimal(10).tetrate(-1), 0)
  assert_eq_tolerance(-1.1, new Decimal(10).tetrate(-1.1), -0.073413324316674049650)
  assert_eq_tolerance(-1.5, new Decimal(10).tetrate(-1.5), -0.40458426287953460128)
  assert_eq_tolerance(-1.9, new Decimal(10).tetrate(-1.9), -1.1345680321718982860)
  assert_eq_tolerance(-1.99, new Decimal(10).tetrate(-1.99), -2.1357989167988367351, 1e-3)
  assert_eq_tolerance(-1.999, new Decimal(10).tetrate(-1.999), -3.1358003090926477386, 1e-3)
  assert_eq_tolerance(-1.9999, new Decimal(10).tetrate(-1.9999), -4.1357992057580525630, 1e-3)
  assert_eq_tolerance(-1.99999, new Decimal(10).tetrate(-1.99999), -5.1357990829699223045, 1e-3)
  assert_eq_tolerance(-2, new Decimal(10).tetrate(-2), Number.NaN)
  assert_eq_tolerance(-2.1, new Decimal(10).tetrate(-2.1), Number.NaN)
}

var test_slog_ground_truth = function()
{
  console.log("test_slog_ground_truth")
  assert_eq_tolerance(10.5, new Decimal("(e^9)299.92012356854593").slog(10), 10.5)
  assert_eq_tolerance(10, new Decimal("(e^8)10000000000").slog(10), 10)
  assert_eq_tolerance(4, new Decimal("ee10000000000").slog(10), 4)
  assert_eq_tolerance(3.5, new Decimal("ee299.92012356854593").slog(10), 3.5)
  assert_eq_tolerance(3, new Decimal("1e10000000000").slog(10), 3)
  assert_eq_tolerance(2.5, new Decimal(8.320004641007381e299).slog(10), 2.5)
  assert_eq_tolerance(2, new Decimal(1e10).slog(10), 2)
  assert_eq_tolerance(1.5, new Decimal(299.92012356854604298).slog(10), 1.5)
  assert_eq_tolerance(1.1, new Decimal(15.276013187671926546).slog(10), 1.1)
  assert_eq_tolerance(1.09, new Decimal(14.590820857079513571).slog(10), 1.09, 1e-4)
  assert_eq_tolerance(1.05, new Decimal(12.243921772755051706).slog(10), 1.05, 1e-3)
  assert_eq_tolerance(1.01, new Decimal(10.398855358124287905).slog(10), 1.01, 1e-4)
  assert_eq_tolerance(1, new Decimal(10).slog(10), 1)
  assert_eq_tolerance(0.99, new Decimal(9.6227033506567471768).slog(10), 0.99, 1e-3)
  assert_eq_tolerance(0.95, new Decimal(8.3015402222604663760).slog(10), 0.95, 1e-2)
  assert_eq_tolerance(0.91, new Decimal(7.2270053728541153571).slog(10), 0.91, 1e-3)
  assert_eq_tolerance(0.5, new Decimal(2.4770056063449647580).slog(10), 0.5)
  assert_eq_tolerance(-1, new Decimal(0).slog(10), -1)
  //note: currently very slow
  assert_eq_tolerance(-1.1, new Decimal(-0.073413324316674049650).slog(10), -1.1)
  assert_eq_tolerance(-1.5, new Decimal(-0.40458426287953460128).slog(10), -1.5)
  assert_eq_tolerance(-1.9, new Decimal(-1.1345680321718982860).slog(10), -1.9)
  assert_eq_tolerance(-1.99, new Decimal(-2.1357989167988367351).slog(10), -1.99, 1e-4)
  assert_eq_tolerance(-1.999, new Decimal(-3.1358003090926477386).slog(10), -1.999, 1e-5)
  assert_eq_tolerance(-1.9999, new Decimal(-4.1357992057580525630).slog(10), -1.9999, 1e-6)
  assert_eq_tolerance(-1.99999, new Decimal(-5.1357990829699223045).slog(10), -1.99999)
}

var test_tetrate_slog = function()
{
  console.log("test_tetrate_slog")
  for (var i = 0; i < 1000; ++i)
  {
    let base = Math.random()*10 + 1.5;
    let tower = Math.random()*10 - 1;
    let round_trip = new Decimal(base).tetrate(tower).slog(base).toNumber();
    let round_trip_linear = new Decimal(base).tetrate(tower, 1, true).slog(base, 100, true).toNumber();
    assert_eq_tolerance("Test 1: " + base + ", " + tower, round_trip, tower, base < 2 ? 1e-2 : 1e-10);
    assert_eq_tolerance("Test 2: " + base + ", " + tower, round_trip_linear, tower, 1e-10);
  }
}

var test_layeradd10_twice = function()
{
  console.log("test_layeradd10_twice")
  for (var i = 0; i < 1000; ++i)
  {
    var first = Math.random()*100;
    var both = Math.random()*100;
    var expected = first+both+1;
    var result = new Decimal(10).layeradd10(first).layeradd10(both).slog();
    assert_eq_tolerance(first + ", " + both, expected, result);
  }
}

var test_layeradd10_reverse = function()
{
  console.log("test_layeradd10_reverse")
  for (var i = 0; i < 1000; ++i)
  {
    var first = Math.random()*100;
    var both = Math.random()*100;
    first += both;
    var expected = first-both+1;
    var result = new Decimal(10).layeradd10(first).layeradd10(-both).slog();
    assert_eq_tolerance(first + ", " + both, expected, result);
  }
}

var test_layeradd10_twice_anybase = function()
{
  console.log("test_layeradd10_twice_anybase")
  for (var i = 0; i < 1000; ++i)
  {
    var first = Math.random()*100;
    var both = Math.random()*100;
    var base = Math.random()*8+2;
    var expected = first+both+1;
    var result = new Decimal(base).layeradd(first, base).layeradd(both, base).slog(base);
    assert_eq_tolerance(first + ", " + both + ", " + base, expected, result);
  }
}

var test_layeradd10_reverse_anybase = function()
{
  console.log("test_layeradd10_reverse_anybase")
  for (var i = 0; i < 1000; ++i)
  {
    var first = Math.random()*100;
    var both = Math.random()*100;
    var base = Math.random()*8+2;
    first += both;
    var expected = first-both+1;
    var result = new Decimal(base).layeradd(first, base).layeradd(-both, base).slog(base);
    assert_eq_tolerance(first + ", " + both + ", " + base, expected, result);
  }
}

var test_tetrate_iteratedlog = function()
{
  console.log("test_tetrate_iteratedlog")
  for (var i = 0; i < 1000; ++i)
  {
    var first = Math.round((Math.random()*30))/10;
    var both = Math.round((Math.random()*30))/10;
    var tetrateonly = Decimal.tetrate(10, first);
    var tetrateandlog = Decimal.tetrate(10, first+both).iteratedlog(10, both);
    assert_eq_tolerance(first + ", " + both, tetrateonly, tetrateandlog);
  }
}

var test_tetrate_base = function()
{
  console.log("test_tetrate_base")
  for (var i = 0; i < 1000; ++i)
  {
    var first = Math.round((Math.random()*30))/10;
    var both = Math.round((Math.random()*30))/10;
    var base = Math.random()*8+2;
    var tetrateonly = Decimal.tetrate(base, first);
    var tetrateandlog = Decimal.tetrate(base, first+both).iteratedlog(base, both);
    assert_eq_tolerance(first + ", " + both + ", " + base, tetrateonly, tetrateandlog);
  }
}

var test_tetrate_base_2 = function()
{
  console.log("test_tetrate_base_2")
  for (var i = 0; i < 1000; ++i)
  {
    var first = Math.round((Math.random()*30))/10;
    var both = Math.round((Math.random()*30))/10;
    var base = Math.random()*8+2;
    var tetrateonly = Decimal.tetrate(base, first, base);
    var tetrateandlog = Decimal.tetrate(base, first+both, base).iteratedlog(base, both);
    assert_eq_tolerance(first + ", " + both + ", " + base, tetrateonly, tetrateandlog);
  }
}

var test_lambertw = function()
{
  console.log("test_lambertw")
  for (var i = 0; i < 1000; ++i)
  {
    var xex = new Decimal(-0.3678794411710499+Math.random()*100);
    var x = Decimal.lambertw(xex);
    assert_eq_tolerance(xex, xex, x.mul(Decimal.exp(x)));
  }
}

var test_lambertw_2 = function()
{
  console.log("test_lambertw_2")
  for (var i = 0; i < 1000; ++i)
  {
    var xex = new Decimal(-0.3678794411710499+Math.exp(Math.random()*100));
    var x = Decimal.lambertw(xex);
    assert_eq_tolerance(xex, xex, x.mul(Decimal.exp(x)));
  }
}

var test_add_number = function()
{
  console.log("test_add_number")
  for (var i = 0; i < 1000; ++i)
  {
    var a = Decimal.randomDecimalForTesting(Math.random() > 0.5 ? 0 : 1);
    var b = Decimal.randomDecimalForTesting(Math.random() > 0.5 ? 0 : 1);
    if (Math.random() > 0.5) { a = a.recip(); }
    if (Math.random() > 0.5) { b = b.recip(); }
    var c = a.add(b).toNumber();
    if (Number.isFinite(c))
    {
      assert_eq_tolerance(a + ", " + b, c, a.toNumber()+b.toNumber());
    }
  }
}

var test_mul = function()
{
  console.log("test_mul")
  for (var i = 0; i < 100; ++i)
  {
    var a = Decimal.randomDecimalForTesting(Math.round(Math.random()*4));
    var b = Decimal.randomDecimalForTesting(Math.round(Math.random()*4));
    if (Math.random() > 0.5) { a = a.recip(); }
    if (Math.random() > 0.5) { b = b.recip(); }
    var c = a.mul(b).toNumber();
    if (Number.isFinite(a.toNumber()) && Number.isFinite(b.toNumber()) && Number.isFinite(c) && a.toNumber() != 0 && b.toNumber() != 0)
    {
      assert_eq_tolerance("Test 1: " + a + ", " + b, c, a.toNumber()*b.toNumber())
    }
    assert_eq_tolerance("Test 2: " + a + ", " + b, Decimal.mul(a.recip(), b.recip()),Decimal.mul(a, b).recip());
  }
}

var test_pow_root = function()
{
  console.log("test_pow_root")
  for (var i = 0; i < 10; ++i)
  {
    var a = Decimal.randomDecimalForTesting(Math.round(Math.random()*4));
    var b = Decimal.randomDecimalForTesting(Math.round(Math.random()*4));
    if (Math.random() > 0.5 && a.sign !== 0) { a = a.recip(); }
    if (Math.random() > 0.5 && b.sign !== 0) { b = b.recip(); }
    var c = a.pow(b);
    var d = a.root(b.recip());
    var e = a.pow(b.recip());
    var f = a.root(b);
    assert_eq_tolerance("Test 1: " + a + ", " + b, c, d)
    assert_eq_tolerance("Test 2: " + a + ", " + b, e, f)
  }
}

var test_tetrate_linear_truth = function()
{
  console.log("test_tetrate_linear_truth")
  assert_eq_tolerance(10.5, new Decimal(10).tetrate(10.5, 1, true), new Decimal("(e^9)1453.0403018990435"))
  assert_eq_tolerance(10, new Decimal(10).tetrate(10, 1, true), new Decimal("(e^8)10000000000"))
  assert_eq_tolerance(4, new Decimal(10).tetrate(4, 1, true), new Decimal("ee10000000000"))
  assert_eq_tolerance(3.5, new Decimal(10).tetrate(3.5, 1, true), new Decimal("e1.0972406760e1453"))
  assert_eq_tolerance(3, new Decimal(10).tetrate(3, 1, true), new Decimal("1e10000000000"))
  assert_eq_tolerance(2.5, new Decimal(10).tetrate(2.5, 1, true), new Decimal("1.0972406760e1453"))
  assert_eq_tolerance(2, new Decimal(10).tetrate(2, 1, true), 1e10)
  assert_eq_tolerance(1.5, new Decimal(10).tetrate(1.5, 1, true), 1453.0403018990435)
  assert_eq_tolerance(1.1, new Decimal(10).tetrate(1.1, 1, true), 18.152038825555795)
  assert_eq_tolerance(1.09, new Decimal(10).tetrate(1.09, 1, true), 16.992949658256496, 1e-3)
  assert_eq_tolerance(1.05, new Decimal(10).tetrate(1.05, 1, true), 13.243978111062273, 1e-3)
  assert_eq_tolerance(1.01, new Decimal(10).tetrate(1.01, 1, true), 10.550984676065603, 1e-3)
  assert_eq_tolerance(1, new Decimal(10).tetrate(1, 1, true), 10)
  assert_eq_tolerance(0.99, new Decimal(10).tetrate(0.99, 1, true), 9.772372209558107, 1e-2)
  assert_eq_tolerance(0.95, new Decimal(10).tetrate(0.95, 1, true), 8.912509381337454, 1e-2)
  assert_eq_tolerance(0.91, new Decimal(10).tetrate(0.91, 1, true), 8.128305161640993, 1e-2)
  assert_eq_tolerance(0.5, new Decimal(10).tetrate(0.5, 1, true), 3.1622776601683795)
  assert_eq_tolerance(-1, new Decimal(10).tetrate(-1, 1, true), 0)
  assert_eq_tolerance(-1.1, new Decimal(10).tetrate(-1.1, 1, true), -0.045757490560675115)
  assert_eq_tolerance(-1.5, new Decimal(10).tetrate(-1.5, 1, true), -0.30102999566398114)
  assert_eq_tolerance(-1.9, new Decimal(10).tetrate(-1.9, 1, true), -1)
  assert_eq_tolerance(-1.99, new Decimal(10).tetrate(-1.99, 1, true), -2)
  assert_eq_tolerance(-1.999, new Decimal(10).tetrate(-1.999, 1, true), -3)
  assert_eq_tolerance(-1.9999, new Decimal(10).tetrate(-1.9999, 1, true), -4)
  assert_eq_tolerance(-1.99999, new Decimal(10).tetrate(-1.99999, 1, true), -5)
  assert_eq_tolerance(-2, new Decimal(10).tetrate(-2, 1, true), Number.NaN)
  assert_eq_tolerance(-2.1, new Decimal(10).tetrate(-2.1, 1, true), Number.NaN)
}

var test_modulo = function() {
  console.log("test_modulo");
  for (var i = 0; i < 1000; ++i)
  {
    var a = Decimal.pow(10, Math.random() * 15);
    var b = Decimal.pow(10, Math.random() * 15);
    if (Math.random() > 0.5 && a.sign !== 0) { a = a.recip(); }
    if (Math.random() > 0.5 && b.sign !== 0) { b = b.recip(); }
    if (Math.random() > 0.5) { a = a.neg(); }
    if (Math.random() > 0.5) { b = b.neg(); }
    var c = a.mod(b);
    var d = a.abs().div(b.abs()).floor().mul(b.abs()).add(c.abs()).mul(a.sgn());
    assert_eq_tolerance(a + ", " + b + " -> " + c + ", " + d, d, a, 1e-5);
  }
}

var test_tetrate_linear_sroot = function()
{
  console.log("test_tetrate_linear_sroot");
  for (var i = 0; i < 1000; ++i)
  {
    let base = Decimal.dOne;
    let degree = Decimal.dOne;
    try {
      base = Decimal.randomDecimalForTesting(Math.round(Math.random()*4));
      if (base.lt(0)) base = base.neg();
      degree = Math.random()*10;
      if (base.eq(0)) base = Decimal.dOne;
      let round_trip = new Decimal(base).linear_sroot(degree).tetrate(degree, 1, true);
      if (!round_trip.isFinite()) continue;
      assert_eq_tolerance(base + ", " + degree + " -> " + round_trip, round_trip, base);
    }
    catch (err) {
      console.log("Error in " + base + ", " + degree + ": " + err);
    }
  }
}

var all_tests = function()
{
  test_tetrate_ground_truth();
  test_slog_ground_truth();
  test_tetrate_slog();
  test_layeradd10_twice();
  test_layeradd10_reverse();
  test_layeradd10_twice_anybase();
  test_layeradd10_reverse_anybase();
  test_tetrate_iteratedlog();
  test_tetrate_base();
  test_tetrate_base_2();
  test_lambertw();
  test_lambertw_2();
  test_add_number();
  test_mul();
  test_pow_root();
  test_tetrate_linear_truth();
  test_modulo();
  test_tetrate_linear_sroot();
}