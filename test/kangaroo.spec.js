describe("describes the kangaroo problem", () => {
  /* global kangaroo */

  let item1 = {
    x1: 0,
    v1: 3,
    x2: 4,
    v2: 2
  };

  let item2 = {
    x1: 0,
    v1: 2,
    x2: 5,
    v2: 3
  };

  let item3 = {
    x1: 11e5,
    v1: 2,
    x2: 5,
    v2: 3
  };

  let item4 = {
    x1: 4523,
    v1: 8092,
    x2: 9419,
    v2: 8076
  };

  afterEach(() => {
    item1 = {
      x1: 0,
      v1: 3,
      x2: 4,
      v2: 2
    };

    item2 = {
      x1: 0,
      v1: 2,
      x2: 5,
      v2: 3
    };

    item3 = {
      x1: 11e5,
      v1: 2,
      x2: 5,
      v2: 3
    };

    item4 = {
      x1: 4523,
      v1: 8092,
      x2: 9419,
      v2: 8076
    };


  });

  it("should calculate the kangaroo's position", () => {
    item1.x1 = kangaroo.calculatePosition(item1.x1, item1.v1);
    item1.x2 = kangaroo.calculatePosition(item1.x2, item1.v2);
    expect(item1.x1).toBe(3);
    expect(item1.x2).toBe(6);

    item2.x1 = kangaroo.calculatePosition(item2.x1, item2.v1);
    item2.x2 = kangaroo.calculatePosition(item2.x2, item2.v2);
    expect(item2.x1).toBe(2);
    expect(item2.x2).toBe(8);
  });

  it("should compare the kangaroo's positions and get yes when they match", () => {
    kangaroo.comparePosition(item1);
    expect(kangaroo.status).toBe("YES");
  });

  it("should compare the kangaroo's positions and get yes when they match", () => {
    kangaroo.comparePosition(item2);
    expect(kangaroo.status).toBe("NO");
    expect(kangaroo.reason).toBe("run away");

  });

  it("should reach the limit of trials", () => {

    kangaroo.comparePosition(item3);
    expect(kangaroo.reason).toBe("over limit");
  });

  it("should handle large e2e", () => {
    //kangaroo.comparePosition(item4);
    //expect(kangaroo.status).toBe("YES");
  });

});