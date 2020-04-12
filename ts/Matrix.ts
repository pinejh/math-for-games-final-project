class Matrix {
    rows: number;
    cols: number;
    matrix: number[][];

    constructor(rows: number, cols: number) {
        this.rows = rows;
        this.cols = cols;

        this.matrix = [];
        for(let j = 0; j < this.rows; j++) {
            let row = [];
            for(let i = 0; i < this.cols; i++) {
                row.push(0);
            }
            this.matrix.push(row);
        }
    }

    scale(s: number): Matrix {
        for(let j = 0; j < this.rows; j++) {
            for(let i = 0; i < this.cols; i++) {
                this.matrix[j][i] *= s;
            }
        }
        return this;
    }

    static Copy(m: Matrix): Matrix {
        let mT = new Matrix(m.rows, m.cols);

        for(let j = 0; j < m.rows; j++) {
            for(let i = 0; i < m.cols; i++) {
                mT.matrix[j][i] = m.matrix[j][i];
            }
        }

        return mT;
    }

    static AddMatrix(m1: Matrix, m2: Matrix): Matrix {
        let m = Matrix.Copy(m1);
        for(let j = 0; j < m.rows; j++) {
            for(let i = 0; i < m.cols; i++) {
                m.matrix[j][i] += m2.matrix[j][i];
            }
        }
        return m;
    }
    static SubMatrix(m1: Matrix, m2: Matrix): Matrix {
        let m = Matrix.Copy(m1);
        for(let j = 0; j < m.rows; j++) {
            for(let i = 0; i < m.cols; i++) {
                m.matrix[j][i] -= m2.matrix[j][i];
            }
        }
        return m;
    }

    static Transpose(m: Matrix): Matrix {
        let mT = new Matrix(m.cols, m.rows);

        for(let j = 0; j < m.rows; j++) {
            for(let i = 0; i < m.cols; i++) {
                mT.matrix[i][j] = m.matrix[j][i];
            }
        }

        return mT;
    }

    static Multiply(m1: Matrix, m2: Matrix): Matrix {
        let m = new Matrix(m1.rows, m2.cols);
        if(m1.cols !== m2.rows) {
            console.error(`Tried to multiply ${m1.rows}x${m1.cols} matrix by ${m2.rows}x${m2.cols}\nM1 cols must equal M2 rows`);
        } else {
            for(let j = 0; j < m.rows; j++) {
                for(let k = 0; k < m.cols; k++) {
                    let sum = 0;
                    for(let i = 0; i < m1.cols; i++) {
                        sum += m1.matrix[j][i] * m2.matrix[i][k];
                    }
                    m.matrix[j][k] = sum;
                }
            }
        }
        return m;
    }

    static Identity(size: number): Matrix {
        let m = new Matrix(size, size);
        for(let j = 0; j < m.rows; j++) {
            m.matrix[j][j] = 1;
        }
        return m;
    }

    static FromVector(v: Vector): Matrix {
        let m = new Matrix(2, 1);
        m.matrix[0][0] = v.x;
        m.matrix[1][0] = v.y;
        return m;
    }
    
}